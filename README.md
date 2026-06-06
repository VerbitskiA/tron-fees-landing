# TronVolt Landing Page

Marketing landing page for TronVolt — TRON Energy delegation via Telegram bot and API.

## Tech Stack

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Set your Telegram bot URL in `.env.local`:

```
NEXT_PUBLIC_TELEGRAM_BOT_URL=https://t.me/YourBotUsername
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_TELEGRAM_BOT_URL` | Yes | Full Telegram bot deep link for CTAs |
| `NEXT_PUBLIC_SUPPORT_TELEGRAM` | No | Support handle (default: `tron_fees_support`) |

## Brand Logo (Favicon)

Place your logo at `public/brand/logo.png`. It is used as the browser tab icon (favicon) only — the landing page uses the TronVolt wordmark in text.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Pages

- `/` — Main landing page
- `/docs` — API documentation placeholder
- `/terms` — Terms of Service placeholder
- `/privacy` — Privacy Policy placeholder
