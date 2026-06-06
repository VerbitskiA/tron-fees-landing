import {
  Bolt,
  HeadphonesIcon,
  PiggyBank,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const benefits = [
  {
    icon: PiggyBank,
    title: "Lower Fees",
    description:
      "Reduce transaction costs by renting Energy instead of spending TRX.",
  },
  {
    icon: Bolt,
    title: "Instant Delegation",
    description: "Energy is delegated automatically within seconds.",
  },
  {
    icon: Sparkles,
    title: "Easy to Use",
    description: "No staking knowledge required.",
  },
  {
    icon: HeadphonesIcon,
    title: "Integration Support",
    description:
      "Contact our support team to integrate Energy into your service.",
  },
];

export function Benefits() {
  return (
    <Section
      id="benefits"
      title="Why Use TronVolt?"
      subtitle="Everything you need to cut TRON transaction costs — without the complexity."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {benefits.map((item) => (
          <Card key={item.title}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <item.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
