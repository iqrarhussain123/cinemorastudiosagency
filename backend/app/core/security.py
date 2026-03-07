import asyncio
from collections import defaultdict, deque
from time import monotonic
from typing import Deque

from fastapi import Header, HTTPException, Request, status

from app.core.config import settings


class InMemoryRateLimiter:
    """Baseline limiter for single-process deployments.

    Replace this with Redis or edge/WAF rate limiting when you scale horizontally.
    """

    def __init__(self, limit: int, window_seconds: int) -> None:
        self.limit = limit
        self.window_seconds = window_seconds
        self._buckets: dict[str, Deque[float]] = defaultdict(deque)
        self._lock = asyncio.Lock()

    async def __call__(self, request: Request) -> None:
        identifier = request.client.host if request.client else "unknown"
        key = f"{request.url.path}:{identifier}"
        now = monotonic()

        async with self._lock:
            bucket = self._buckets[key]

            while bucket and now - bucket[0] >= self.window_seconds:
                bucket.popleft()

            if len(bucket) >= self.limit:
                raise HTTPException(
                    status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                    detail="Too many requests. Please try again shortly.",
                )

            bucket.append(now)


lead_submission_limiter = InMemoryRateLimiter(
    limit=settings.LEAD_RATE_LIMIT,
    window_seconds=settings.LEAD_RATE_LIMIT_WINDOW_SECONDS,
)


async def require_admin_api_key(
    x_admin_token: str | None = Header(default=None, alias="X-Admin-Token"),
) -> None:
    if not settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Admin access is disabled until ADMIN_API_KEY is configured.",
        )

    if x_admin_token != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid admin token.",
        )
