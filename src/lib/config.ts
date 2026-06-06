export const MAX_SAVINGS_PERCENT = 70;

/** Client pays ~30% of baseline TRX cost (~70% savings). */
export const TRONVOLT_COST_RATE = 0.3;

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
