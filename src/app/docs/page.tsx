import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getSupportUrl, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "API Documentation — TronVolt",
  description:
    "TronVolt REST API: register users, estimate TRON energy prices, create delegation orders and track their status.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 glass-card rounded-2xl p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-muted">{children}</div>
    </div>
  );
}

function Endpoint({ method, path, note }: { method: string; path: string; note?: string }) {
  return (
    <div>
      <code className="text-sm">
        <span className="text-accent">{method}</span>{" "}
        <span className="text-white">{path}</span>
      </code>
      {note ? <p className="mt-1 text-sm text-muted">{note}</p> : null}
    </div>
  );
}

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

        <h1 className="text-3xl font-bold">API Documentation</h1>
        <p className="mt-4 text-muted">
          Use the TronVolt API to rent TRON Energy programmatically: register a
          user, get a price estimate, create an order and receive a payment
          address. Payments are processed per order; once confirmed, energy is
          delegated to the target address within a minute.
        </p>

        <Section title="Base URL">
          <code className="block rounded-lg bg-white/5 px-4 py-3 text-sm text-accent">
            {siteConfig.apiBaseUrl}
          </code>
          <p>All responses are JSON (camelCase).</p>
        </Section>

        <Section title="Authentication">
          <p>
            Every request (except <code>GET /health</code>) requires the header{" "}
            <code>X-Api-Key</code> with your service key. Contact support to get
            one — integration help is included.
          </p>
        </Section>

        <Section title="1. Register a user">
          <Endpoint
            method="POST"
            path="/api/users/register"
            note='Body: { "telegramId": 123456789, "referralStartPayload": "aff_CODE" } (payload optional). Idempotent: same telegramId returns the same userId.'
          />
        </Section>

        <Section title="2. Price estimate">
          <Endpoint
            method="GET"
            path="/api/energy-delegation/pricing-estimate?delegationEnergyQuantity=65000&delegationDurationHours=1&telegramUserId=123456789"
            note="Optional telegramUserId adds the caller's referral discount to the estimate (rewardDiscountSun, discountedClientPriceSun)."
          />
        </Section>

        <Section title="3. Create an order">
          <Endpoint
            method="POST"
            path="/api/energy-delegation/orders"
            note='Body: { "telegramUserId": 123456789, "delegationEnergyQuantity": 65000, "delegationDurationHours": 1, "delegationRecipientTronAddress": "T..." }. Returns a payment address and amount; the order executes automatically once the payment is confirmed.'
          />
        </Section>

        <Section title="4. Order status">
          <Endpoint
            method="GET"
            path="/api/energy-delegation/orders/{orderId}"
            note="Statuses: Created → Paid → Executed | Failed | Expired (unpaid for 24h)."
          />
        </Section>

        <Section title="Referral program">
          <p>
            Every registered user gets a referral code automatically. Rewards
            (50% of order margin by default) accrue on each paid order of an
            invited user and are applied automatically as a discount (up to 80%
            of the order price) on the inviter&apos;s own orders.
          </p>
        </Section>

        <div className="mt-8">
          <Button href={getSupportUrl()} external variant="primary">
            Contact Support for API Access
          </Button>
        </div>
      </Container>
    </div>
  );
}
