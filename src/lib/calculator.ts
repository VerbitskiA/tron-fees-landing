import { PRICE_PACKS } from "./config";

/** TRX → USD display rate (aligned with TronFees bot). */
export const TRX_USD_RATE = 0.35;

export type SavingsResult = {
  costWithout: number;
  costWithTronVolt: number;
  savings: number;
  savingsUsd: number;
};

/** Our price for one transaction burning `fee` TRX: the cheapest package covering it. */
export function priceForBurnTrx(fee: number): number {
  for (const pack of PRICE_PACKS) {
    if (fee <= pack.coversBurnTrx) return pack.priceTrx;
  }
  const largest = PRICE_PACKS[PRICE_PACKS.length - 1];
  return largest.priceTrx * Math.ceil(fee / largest.coversBurnTrx);
}

export function calculateSavings(
  transactionCount: number,
  avgTrxFee: number,
): SavingsResult {
  const count = Math.max(0, transactionCount);
  const fee = Math.max(0, avgTrxFee);
  const costWithout = count * fee;
  const costWithTronVolt = count * priceForBurnTrx(fee);
  const savings = costWithout - costWithTronVolt;

  return {
    costWithout,
    costWithTronVolt,
    savings,
    savingsUsd: savings * TRX_USD_RATE,
  };
}

export function formatTrx(value: number, decimals = 4): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: decimals,
  });
}

export function formatUsd(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
