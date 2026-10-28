export const MAX_SAVINGS_PERCENT = 70;

/**
 * Retail package prices (TRX), mirroring bot pricing: CatFee cost + min margin
 * (Pricing:MinMarginTrx), rounded up to a 0.5 TRX step. `coversBurnTrx` is the
 * network burn cost the package's Energy covers. Update together with pricing.
 */
export const PRICE_PACKS = [
  { energy: 65_000, coversBurnTrx: 13.5, priceTrx: 4.0 },
  { energy: 135_000, coversBurnTrx: 27, priceTrx: 5.0 },
  { energy: 270_000, coversBurnTrx: 54, priceTrx: 7.5 },
] as const;

export const logo = {
  /** Optional brand asset in public/. For favicon, prefer `src/app/icon.png`. */
  src: "/brand/logo.png",
  alt: "TronVolt",
} as const;

export const siteConfig = {
  name: "TronVolt",
  title: "TronVolt - Save on TRON Transaction Fees",
  description:
    "Rent TRON Energy instantly and reduce transaction costs by up to 70%. Fast, reliable Energy delegation through our Telegram bot.",
  keywords: [
    "tron energy",
    "tron energy rental",
    "tron energy delegation",
    "save tron fees",
    "tron api",
    "tron resources",
  ],
  apiBaseUrl: "https://tron-fees-api.tronpay.me",
  supportTelegram:
    process.env.NEXT_PUBLIC_SUPPORT_TELEGRAM ?? "tron_volt_support",
  telegramBotUrl: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? "",
} as const;

export function getSupportUrl() {
  return `https://t.me/${siteConfig.supportTelegram.replace(/^@/, "")}`;
}

export function getTelegramBotUrl() {
  return siteConfig.telegramBotUrl || null;
}

export function getSupportHandle() {
  const handle = siteConfig.supportTelegram.replace(/^@/, "");
  return `@${handle}`;
}
