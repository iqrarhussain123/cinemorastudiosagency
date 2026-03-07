# Cinemora Studios

Full-stack marketing agency site for Cinemora Studios.

## Stack

- Frontend: Next.js 16, React 19, Framer Motion
- Backend: FastAPI, async SQLAlchemy, asyncpg
- Database: PostgreSQL 16

## Structure

```text
frontend/  Next.js app
backend/   FastAPI API
db/        PostgreSQL compose + init SQL
```

## Vercel deployment

- Import this repository as a monorepo project.
- Set the Vercel project's Root Directory to `frontend`.
- The app-level Vercel config lives in `frontend/vercel.json`.
- Deploy the backend separately and set `BACKEND_URL` in the frontend environment.

## Local setup

### Database

```powershell
cd db
docker compose up -d
```

### Backend

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```powershell
cd frontend
npm install
copy .env.local.example .env.local
npm run dev
```

## Production hardening defaults

The repo now includes:

- API admin protection on `GET /api/v1/leads` via `X-Admin-Token`
- Per-IP lead submission rate limiting on `POST /api/v1/leads`
- DB pool sizing and statement timeout configuration
- API readiness check on `/ready`
- Trusted host, gzip, and optional HTTPS redirect support
- Stronger security headers on both Next.js and FastAPI
- Example env files for frontend and backend

## Required production env

Backend:

```text
ENVIRONMENT=production
DATABASE_URL=postgresql+asyncpg://...
ALLOWED_ORIGINS=https://your-frontend-domain.com
TRUSTED_HOSTS=your-api-domain.com
ADMIN_API_KEY=replace-this
ENABLE_HTTPS_REDIRECT=true
```

Frontend:

```text
BACKEND_URL=https://your-api-domain.com
NEXT_PUBLIC_SITE_URL=https://your-frontend-domain.com
```

## Notes

- The included rate limiter is an in-process baseline. For multi-instance production, move rate limiting to Redis, the edge, or your WAF/CDN.
- Keep API docs disabled in production unless you explicitly need them.
