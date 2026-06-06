import { CreditCard, Send, Wallet, Zap } from "lucide-react";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    step: 1,
    icon: Wallet,
    title: "Enter your TRON wallet address",
    description: "Provide the address that will receive delegated Energy.",
  },
  {
    step: 2,
    icon: Zap,
    title: "Select Energy amount",
    description: "Choose from standard packages (65k, 135k, or 270k Energy).",
  },
  {
    step: 3,
    icon: CreditCard,
    title: "Pay with supported method",
    description: "Complete payment via the bot using supported currencies.",
  },
  {
    step: 4,
    icon: Send,
    title: "Receive delegated Energy instantly",
    description: "Energy is delegated to your wallet — usually within a minute.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="How It Works"
      subtitle="Four simple steps to start saving on every TRON transaction."
    >
      <div className="relative">
        <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:left-1/2 md:block md:-translate-x-1/2" />

        <div className="space-y-8 md:space-y-12">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-1 md:justify-end">
                <div
                  className={`max-w-md rounded-2xl glass-card p-6 ${
                    index % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-accent">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              </div>

              <div className="relative z-10 flex shrink-0 items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background glow-primary">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
              </div>

              <div className="hidden flex-1 md:block" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
