import { Bot, Briefcase, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const useCases = [
  {
    icon: Users,
    title: "Regular Users",
    description:
      "Reduce costs on transfers and smart contract interactions.",
  },
  {
    icon: TrendingUp,
    title: "Traders",
    description: "Save on frequent transactions.",
  },
  {
    icon: Bot,
    title: "Bots & Services",
    description: "Set up automated Energy purchasing with support.",
  },
  {
    icon: Briefcase,
    title: "Businesses",
    description: "Optimize operational costs.",
  },
];

export function UseCases() {
  return (
    <Section
      id="use-cases"
      title="Built for Everyone"
      subtitle="Whether you send a few transactions or thousands, TronVolt scales with you."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {useCases.map((item) => (
          <Card key={item.title} className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <item.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
