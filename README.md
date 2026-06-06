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
| `NEXT_PUBLIC_SUPPORT_TELEGRAM` | No | Support handle (default: `tron_volt_support`) |

## Brand Logo (Favicon)

Next.js uses files in `src/app/` for the browser tab icon:

1. **Your logo:** save as [`src/app/icon.png`](src/app/icon.png) (recommended, 512×512 or 32×32 PNG).
2. **Until then:** [`src/app/icon.svg`](src/app/icon.svg) (built-in TronVolt lightning bolt) is shown.

`public/brand/logo.png` is optional storage only — it is **not** used for favicon unless copied to `src/app/icon.png`.

The landing page uses the TronVolt wordmark in text, not the image logo.

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
