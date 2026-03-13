# Cinemora n8n Setup

## Start locally

1. Copy [`.env.example`](/e:/cinemorastudiosagency/automation/n8n/.env.example) to `automation/n8n/.env`.
2. Copy [`.env.example`](/e:/cinemorastudiosagency/frontend/.env.example) to `frontend/.env.local`.
3. Set your Stripe secret key and Stripe Price IDs in `frontend/.env.local`.
4. Run:

```powershell
docker compose -f automation/docker-compose.n8n.yml up -d
```

5. Open `http://127.0.0.1:5678`.
6. Import [client-intake-router.json](/e:/cinemorastudiosagency/automation/n8n/workflows/client-intake-router.json).
7. Set the three `N8N_*_WEBHOOK_URL` variables in `frontend/.env.local` to:

```text
http://127.0.0.1:5678/webhook/cinemora-intake
```

## What the starter workflow does

- Receives enquiry, onboarding, and support submissions from the new website pages.
- Normalizes a few important fields so routing is easier.
- Responds quickly to the website with a success payload.

## Good next automations

- Push enquiries into a CRM or Google Sheets.
- Create onboarding tasks automatically after Stripe checkout.
- Route critical support requests to Slack or email.
- Branch targeting and follow-up by service type, budget, or urgency.
