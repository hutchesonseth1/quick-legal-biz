# Quick Legal Biz – Sprint Build

## Run
```
npm install
npm run dev
```
Portal password: set `NEXT_PUBLIC_PORTAL_PASS` (default: `truepath`).

## What’s included
- `/tools` – download stripped starter templates (MD files under `public/docs`).
- `/portal` – simple password gate; links to internal pages.
- `/metrics` – sales stub (connect Stripe/Gumroad webhooks).
- `/branding` – watermark CSS + email template list.
- `/api/health` – simple health check.
- `/api/intake` – saves JSON to `/tmp` (dev only; use a DB in prod).

## Wire revenue
- **Stripe Checkout** or **Gumroad** button embeds on product cards.
- Use **Stripe Webhooks** to mark orders paid and email links.

## Monitoring / Alerts
- **UptimeRobot** or **Better Stack**: ping `/api/health` every 1–5 min.
- **Vercel Alerts**: errors, cold starts, 500 rates.
- **Log drain**: Better Stack / Datadog; alert on spike.
- **Thresholds**: 90% CPU, 75% RAM, 80% disk, 95th latency > 1s.
  Use notification policies: night vs day, batch alerts, dedupe 30–60 min.

## Data input & QA (next phase)
- Add form wizards (Zod schema) -> server render -> PDF export (PDFKit) -> queue for **secondary human review** flag.
- Store in Postgres (Neon / Supabase) with Prisma; status: `draft -> review -> approved -> delivered`.
- Simple ticketing: `/portal/review` list of drafts needing human QA.

## On‑site chat AI
- Start with **OpenAI Responses API** or **OpenRouter** for cost tiers.
- Gate: free 3 messages, then upsell to package.
- Ground responses with your templates + FAQs to avoid legal advice issues.
