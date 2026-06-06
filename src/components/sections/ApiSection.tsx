import { ArrowRight, BookOpen, Rocket, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";

const features = [
  { icon: Server, text: "REST API" },
  { icon: Rocket, text: "Fast integration" },
  { icon: Zap, text: "Automated Energy delegation" },
  { icon: BookOpen, text: "Production-ready" },
];

const codeSnippet = `POST /api/energy-delegation/orders
Host: tron-fees-api.tronpay.me
X-Api-Key: YOUR_API_KEY
Content-Type: application/json

{
  "telegramUserId": 123456789,
  "delegationEnergyQuantity": 135000,
  "delegationDurationHours": 1,
  "delegationRecipientTronAddress": "T..."
}`;

export function ApiSection() {
  return (
    <Section
      id="api"
      title="Developer Friendly API"
      subtitle="Integrate TRON Energy delegation into your apps with a simple REST API."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <ul className="space-y-4">
            {features.map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/docs" variant="primary">
              API Documentation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            Base URL:{" "}
            <code className="rounded bg-white/5 px-2 py-0.5 text-accent">
              {siteConfig.apiBaseUrl}
            </code>
          </p>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="border-b border-white/10 bg-white/5 px-4 py-2">
            <span className="text-xs text-muted">Example request</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-muted">
            <code>
              {codeSnippet.split("\n").map((line, i) => {
                if (line.startsWith("POST")) {
                  return (
                    <span key={i} className="text-accent">
                      {line}
                      {"\n"}
                    </span>
                  );
                }
                if (line.startsWith("X-Api-Key")) {
                  return (
                    <span key={i} className="text-primary">
                      {line}
                      {"\n"}
                    </span>
                  );
                }
                if (line.includes('"')) {
                  return (
                    <span key={i} className="text-foreground">
                      {line}
                      {"\n"}
                    </span>
                  );
                }
                return (
                  <span key={i}>
                    {line}
                    {"\n"}
                  </span>
                );
              })}
            </code>
          </pre>
        </Card>
      </div>
    </Section>
  );
}
