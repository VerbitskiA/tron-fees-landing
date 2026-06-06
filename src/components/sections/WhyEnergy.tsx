import { ArrowRight, Flame, Zap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { MAX_SAVINGS_PERCENT } from "@/lib/config";

export function WhyEnergy() {
  return (
    <Section
      id="why-energy"
      title="What Is TRON Energy?"
      subtitle="Understanding Energy helps you understand why TronVolt saves you money."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Required for smart contracts</h3>
              <p className="mt-1 text-sm text-muted">
                Energy is consumed when executing smart contract transactions on
                the TRON network — transfers, swaps, and dApp interactions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Flame className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <h3 className="font-semibold">Without Energy, TRX is burned</h3>
              <p className="mt-1 text-sm text-muted">
                If you don&apos;t have enough Energy, the network burns TRX from
                your wallet to cover transaction fees — often at a high cost.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <ArrowRight className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Renting is usually much cheaper</h3>
              <p className="mt-1 text-sm text-muted">
                Delegating Energy through TronVolt costs a fraction of burning
                TRX directly — saving up to {MAX_SAVINGS_PERCENT}% on typical transactions.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-red-400">
                  Without Energy
                </p>
                <p className="mt-2 text-2xl font-bold">~27 TRX</p>
                <p className="text-xs text-muted">burned per transaction</p>
              </div>

              <div className="flex h-8 items-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
                <span className="mx-2 text-xs text-accent">vs</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
              </div>

              <div className="w-full rounded-xl border border-accent/30 bg-accent/10 p-4 text-center glow-accent">
                <p className="text-xs uppercase tracking-wide text-accent">
                  With TronVolt
                </p>
                <p className="mt-2 text-2xl font-bold text-accent">~8 TRX</p>
                <p className="text-xs text-muted">rented Energy cost</p>
              </div>

              <div className="rounded-lg bg-primary/20 px-4 py-2 text-center">
                <p className="text-sm font-semibold text-primary">
                  Save ~{MAX_SAVINGS_PERCENT}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
