"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import {
  calculateSavings,
  formatTrx,
  formatUsd,
} from "@/lib/calculator";

export function SavingsCalculator() {
  const [transactionCount, setTransactionCount] = useState(100);
  const [avgTrxFee, setAvgTrxFee] = useState(13.5);

  const result = useMemo(
    () => calculateSavings(transactionCount, avgTrxFee),
    [transactionCount, avgTrxFee],
  );

  return (
    <Section
      id="calculator"
      title="Calculate Your Savings"
      subtitle="See how much you could save by renting Energy instead of burning TRX."
    >
      <Card className="mx-auto max-w-3xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="transactions"
                className="mb-2 block text-sm font-medium"
              >
                Number of transactions:{" "}
                <span className="text-accent">{transactionCount}</span>
              </label>
              <input
                id="transactions"
                type="range"
                min={1}
                max={1000}
                value={transactionCount}
                onChange={(e) => setTransactionCount(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <input
                type="number"
                min={1}
                max={10000}
                value={transactionCount}
                onChange={(e) =>
                  setTransactionCount(Math.max(1, Number(e.target.value)))
                }
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="avg-fee"
                className="mb-2 block text-sm font-medium"
              >
                Average TRX fee per transaction:{" "}
                <span className="text-accent">{formatTrx(avgTrxFee)} TRX</span>
              </label>
              <input
                id="avg-fee"
                type="range"
                min={1}
                max={60}
                step={0.1}
                value={avgTrxFee}
                onChange={(e) => setAvgTrxFee(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <input
                type="number"
                min={0.1}
                max={100}
                step={0.1}
                value={avgTrxFee}
                onChange={(e) =>
                  setAvgTrxFee(Math.max(0.1, Number(e.target.value)))
                }
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-muted">Cost without Energy</p>
              <p className="text-2xl font-bold">
                {formatTrx(result.costWithout)} TRX
              </p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 glow-accent">
              <p className="text-sm text-muted">Cost with TronVolt</p>
              <p className="text-2xl font-bold text-accent">
                {formatTrx(result.costWithTronVolt)} TRX
              </p>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 glow-primary">
              <p className="text-sm text-muted">Total savings</p>
              <p className="text-2xl font-bold text-primary">
                {formatTrx(result.savings)} TRX
              </p>
              <p className="mt-1 text-sm text-muted">
                ≈ {formatUsd(result.savingsUsd)}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Estimates based on typical delegation savings; actual pricing varies
          by energy amount.
        </p>
      </Card>
    </Section>
  );
}
