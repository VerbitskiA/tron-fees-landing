import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, Bell, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getSupportUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "API — Early Access — TronVolt",
  description:
    "TRON Energy rental API for services and bots: price estimates, delegation orders, status notifications. Early access — onboarding is manual.",
};

const capabilities = [
  {
    icon: Zap,
    title: "Energy delegation on demand",
    description:
      "Rent TRON Energy for an address programmatically and cut USDT TRC-20 transfer costs by up to 70%.",
  },
  {
    icon: BarChart3,
    title: "Pricing before commitment",
    description:
      "Request a price estimate for any amount and duration before creating an order.",
  },
  {
    icon: Bell,
    title: "Status notifications",
    description:
      "Know when an order is paid, executed or failed — delivered to your service.",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen py-12">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="text-3xl font-bold">API — Early Access</h1>
        <p className="mt-4 text-muted">
          We are opening a TRON Energy rental API for services, exchangers and
          bots that move USDT on TRON at volume. It is in early access and we
          onboard partners manually — one at a time, with keys scoped per
          integration. Full documentation is shared during onboarding.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="glass-card rounded-2xl p-5">
              <c.icon className="h-6 w-6 text-accent" />
              <h2 className="mt-3 text-sm font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted">{c.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Want in?</h2>
          <p className="mt-2 text-sm text-muted">
            Tell us about your service and expected volumes — we will set you
            up and help with the integration.
          </p>
          <div className="mt-4">
            <Button href={getSupportUrl()} external variant="primary">
              Contact Support
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
