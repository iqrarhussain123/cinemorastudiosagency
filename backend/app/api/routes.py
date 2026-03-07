from fastapi import APIRouter, Depends, Query, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.security import lead_submission_limiter, require_admin_api_key
from app.models.lead import Lead
from app.schemas.lead import LeadCreate, LeadOut

router = APIRouter()


@router.post(
    "/leads",
    response_model=LeadOut,
    status_code=status.HTTP_201_CREATED,
    dependencies=[Depends(lead_submission_limiter)],
)
async def create_lead(payload: LeadCreate, db: AsyncSession = Depends(get_db)) -> Lead:
    """Capture a discovery call booking or contact form submission."""
    lead = Lead(
        name=payload.name,
        email=payload.email.lower(),
        company=payload.company,
        message=payload.message,
        source=payload.source,
    )
    db.add(lead)
    await db.commit()
    await db.refresh(lead)
    return lead


@router.get(
    "/leads",
    response_model=list[LeadOut],
    dependencies=[Depends(require_admin_api_key)],
)
async def list_leads(
    limit: int = Query(default=50, ge=1, le=100),
    offset: int = Query(default=0, ge=0),
    db: AsyncSession = Depends(get_db),
) -> list[Lead]:
    """List leads for authenticated admin use."""
    result = await db.execute(
        select(Lead)
        .order_by(Lead.created_at.desc())
        .limit(limit)
        .offset(offset)
    )
    return result.scalars().all()
