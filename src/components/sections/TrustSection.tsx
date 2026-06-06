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

const stats = [
  { label: "Total delegated energy", value: "2.4B+", demo: true },
  { label: "Orders completed", value: "18,500+", demo: true },
  { label: "Active users", value: "3,200+", demo: true },
];

export function TrustSection() {
  return (
    <Section
      id="trust"
      title="Reliable Infrastructure"
      subtitle="Built for speed, transparency, and reliability at scale."
    >
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((item) => (
          <Card key={item.title}>
            <item.icon className="mb-3 h-6 w-6 text-accent" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            {stat.demo ? (
              <span className="mb-2 inline-block rounded-full bg-white/5 px-2 py-0.5 text-xs text-muted">
                Demo stats
              </span>
            ) : null}
            <p className="text-3xl font-bold gradient-text">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
