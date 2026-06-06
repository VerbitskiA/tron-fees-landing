import { TRONVOLT_COST_RATE } from "./config";

/** Approximate client cost multiplier vs burning TRX (~70% savings). */
export const TRONVOLT_RATE = TRONVOLT_COST_RATE;

/** TRX → USD display rate (aligned with TronFees bot). */
export const TRX_USD_RATE = 0.35;

export type SavingsResult = {
  costWithout: number;
  costWithTronVolt: number;
  savings: number;
  savingsUsd: number;
};

export function calculateSavings(
  transactionCount: number,
  avgTrxFee: number,
): SavingsResult {
  const count = Math.max(0, transactionCount);
  const fee = Math.max(0, avgTrxFee);
  const costWithout = count * fee;
  const costWithTronVolt = costWithout * TRONVOLT_RATE;
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
