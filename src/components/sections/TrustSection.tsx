import { Activity, Shield, Timer, Wallet } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const pillars = [
  {
    icon: Timer,
    title: "Fast processing",
    description: "Orders are processed automatically with minimal delay.",
  },
  {
    icon: Activity,
    title: "Automated delegation",
    description: "Energy is delegated to your wallet without manual steps.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    description: "See exact costs before you pay — no hidden fees.",
  },
  {
    icon: Shield,
    title: "Secure transactions",
    description: "Industry-standard payment and delegation infrastructure.",
  },
];

export function TrustSection() {
  return (
    <Section
      id="trust"
      title="Reliable Infrastructure"
      subtitle="Built for speed, transparency, and reliability at scale."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((item) => (
          <Card key={item.title}>
            <item.icon className="mb-3 h-6 w-6 text-accent" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
