import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { getSupportUrl, getTelegramBotUrl, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Partner API — TronVolt",
  description:
    "TRON Energy rental API for services that move USDT on TRON: prepaid deposit, instant delegation orders, signed webhooks. Self-serve via our Telegram bot.",
};

const BASE_URL = `${siteConfig.apiBaseUrl}/api/b2b/v1`;

function Code({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-xl bg-black/60 p-4 text-[13px] leading-relaxed text-neutral-200">
      <code>{children}</code>
    </pre>
  );
}

function Endpoint({
  method,
  path,
  title,
  children,
}: {
  method: string;
  path: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-accent/20 px-2 py-1 font-mono text-xs font-bold text-accent">
          {method}
        </span>
        <code className="break-all font-mono text-sm text-neutral-300">{path}</code>
      </div>
      <div className="mt-3 space-y-3 text-sm text-muted">{children}</div>
    </section>
  );
}

export default function DocsPage() {
  const botUrl = getTelegramBotUrl();

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

        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Partner API</h1>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            Live
          </span>
        </div>
        <p className="mt-4 text-muted">
          TRON Energy rental for services that move USDT on TRON: exchangers,
          P2P platforms, wallets and bots. Prepaid deposit, per-order atomic
          billing, signed webhooks. Your users never see us — the energy lands
          on their address directly on-chain.
        </p>

        <div className="mt-8 glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Get access — self-serve</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted">
            <li>Open our Telegram bot and send <code className="font-mono text-neutral-300">/partner</code></li>
            <li>Enter your service name and (optionally) a webhook URL</li>
            <li>
              Receive an API key in chat — it activates the moment we approve
              your application (usually minutes)
            </li>
            <li>
              Top up your deposit from the partner cabinet in the bot — from
              50 TRX, credited automatically
            </li>
          </ol>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {botUrl ? (
              <TrackedButton
                event="docs_request_api_key"
                href={botUrl}
                external
                variant="primary"
              >
                Get an API key in Telegram
              </TrackedButton>
            ) : null}
            <a
              href={getSupportUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline transition-colors hover:text-white"
            >
              or talk to support first
            </a>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Authentication</h2>
          <p className="mt-3 text-sm text-muted">
            Every request carries your key in the Authorization header. Keys
            look like <code className="font-mono text-neutral-300">tvb2b_…</code>{" "}
            and are scoped to your partner account. Rate limit: 10 requests per
            second per key (429 with a Retry-After header above that).
          </p>
          <Code>{`Authorization: Bearer tvb2b_YOUR_KEY`}</Code>
          <p className="mt-3 text-sm text-muted">
            Base URL: <code className="break-all font-mono text-neutral-300">{BASE_URL}</code>
          </p>
        </section>

        <Endpoint method="POST" path="/orders" title="Create an order">
          <p>
            Delegates energy to an address and bills your deposit atomically.
            Send an <code className="font-mono text-neutral-300">Idempotency-Key</code>{" "}
            header (any unique string per logical order) — retries with the
            same key return the original order instead of creating a duplicate.
          </p>
          <p>
            Amounts are in SUN (1 TRX = 1,000,000 SUN). Energy is any positive
            integer; typical packages are 65,000 / 135,000 / 270,000 for 1 hour.
          </p>
          <Code>{`curl -X POST ${BASE_URL}/orders \\
  -H "Authorization: Bearer tvb2b_YOUR_KEY" \\
  -H "Idempotency-Key: order-2026-10-09-0001" \\
  -H "Content-Type: application/json" \\
  -d '{
    "address": "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "energyQuantity": 65000,
    "durationHours": 1
  }'

{
  "orderId": "f2743f26-3960-4f3b-aec4-24912c0ff917",
  "status": "Executed",
  "address": "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "energyQuantity": 65000,
  "durationHours": 1,
  "priceSun": 1470000,
  "heldSun": 1470000,
  "createdAt": "2026-10-09T10:00:00Z",
  "idempotentReplay": false
}`}</Code>
          <p>
            The response returns once delegation is submitted —{" "}
            <code className="font-mono text-neutral-300">Executed</code> means
            energy is landing on the address (about a minute),{" "}
            <code className="font-mono text-neutral-300">Failed</code> means the
            provider rejected the order and the hold returned to your deposit
            (see <code className="font-mono text-neutral-300">failureCode</code>{" "}
            via the status endpoint).
          </p>
        </Endpoint>

        <Endpoint method="GET" path="/orders/{orderId}" title="Order status">
          <p>Current state of an order, including failure details. Only your own orders — anything else is a 404.</p>
          <Code>{`curl ${BASE_URL}/orders/f2743f26-3960-4f3b-aec4-24912c0ff917 \\
  -H "Authorization: Bearer tvb2b_YOUR_KEY"

{
  "orderId": "f2743f26-3960-4f3b-aec4-24912c0ff917",
  "status": "Executed",
  "address": "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "energyQuantity": 65000,
  "durationHours": 1,
  "priceSun": 1470000,
  "createdAt": "2026-10-09T10:00:00Z",
  "executedAt": "2026-10-09T10:00:12Z",
  "failureCode": null,
  "failureReason": null
}`}</Code>
        </Endpoint>

        <Endpoint method="GET" path="/balance" title="Deposit balance">
          <p>
            Available = spendable now (open holds already deducted). Held =
            reserved by in-flight orders. When the deposit runs low we alert
            your Telegram contact automatically.
          </p>
          <Code>{`curl ${BASE_URL}/balance \\
  -H "Authorization: Bearer tvb2b_YOUR_KEY"

{
  "availableSun": 98530000,
  "heldSun": 0,
  "totalSun": 98530000,
  "availableTrx": 98.53,
  "heldTrx": 0,
  "totalTrx": 98.53
}`}</Code>
        </Endpoint>

        <Endpoint method="GET" path="/pricing" title="Pricing">
          <p>Live prices for the standard packages: retail vs your discounted rate.</p>
          <Code>{`curl ${BASE_URL}/pricing \\
  -H "Authorization: Bearer tvb2b_YOUR_KEY"

{
  "discountPercent": 10,
  "currency": "trx",
  "packages": [
    { "energyQuantity": 65000,  "durationHours": 1, "retailTrx": 2.5, "partnerTrx": 2.25 },
    { "energyQuantity": 135000, "durationHours": 1, "retailTrx": 4.5, "partnerTrx": 4.05 },
    { "energyQuantity": 270000, "durationHours": 1, "retailTrx": 8.5, "partnerTrx": 7.65 }
  ]
}`}</Code>
        </Endpoint>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Webhooks</h2>
          <p className="mt-3 text-sm text-muted">
            Configure a URL via the bot or support. When an order finishes we
            POST a signed notification — no polling needed. Events:{" "}
            <code className="font-mono text-neutral-300">order.executed</code>,{" "}
            <code className="font-mono text-neutral-300">order.failed</code>.
            Failed deliveries retry for ~2.5 hours (1m / 5m / 30m / 2h).
          </p>
          <Code>{`POST /your-endpoint
X-TronVolt-Event: delegation-order
X-TronVolt-Signature: sha256=ab12…

{
  "orderId": "f2743f26-3960-4f3b-aec4-24912c0ff917",
  "status": "Executed",
  "address": "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "energyAmount": 65000,
  "durationHours": 1,
  "priceSun": 1470000,
  "occurredAt": "2026-10-09T10:00:12Z"
}`}</Code>
          <p className="mt-4 text-sm text-muted">
            Verify the signature with your webhook secret (shown in the
            partner cabinet in the bot) over the raw request body:
          </p>
          <Code>{`// Node.js
import { createHmac, timingSafeEqual } from "node:crypto";

const expected = "sha256=" + createHmac("sha256", WEBHOOK_SECRET)
  .update(rawBody)
  .digest("hex");
const ok = timingSafeEqual(
  Buffer.from(expected),
  Buffer.from(req.headers["x-tronvolt-signature"] ?? ""),
);

# Python
import hmac, hashlib
expected = "sha256=" + hmac.new(
    WEBHOOK_SECRET.encode(), raw_body, hashlib.sha256
).hexdigest()
ok = hmac.compare_digest(expected, request.headers["X-TronVolt-Signature"])`}</Code>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Errors</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-muted">
                  <th className="py-2 pr-4 font-medium">Code</th>
                  <th className="py-2 pr-4 font-medium">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["400", "Invalid parameters (address, energy, duration, idempotency key)."],
                  ["401", "Missing, invalid or revoked API key."],
                  ["403", "Key is fine but the partner account is not active yet."],
                  ["404", "Unknown resource — or an order that belongs to another partner."],
                  ["409", "Insufficient deposit: the response carries availableSun / requiredSun."],
                  ["429", "Rate limit exceeded — retry after the Retry-After header."],
                ].map(([code, meaning]) => (
                  <tr key={code} className="border-b border-white/5">
                    <td className="py-2 pr-4 font-mono text-neutral-300">{code}</td>
                    <td className="py-2 pr-4">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Ready to integrate?</h2>
          <p className="mt-2 text-sm text-muted">
            The whole onboarding takes minutes: apply in the bot, get the key,
            top up 50 TRX — and your first order can go out today.
          </p>
          <div className="mt-4">
            {botUrl ? (
              <TrackedButton
                event="docs_request_api_key"
                eventProps={{ location: "docs_footer" }}
                href={botUrl}
                external
                variant="primary"
              >
                Get an API key in Telegram
              </TrackedButton>
            ) : (
              <a href={getSupportUrl()} className="text-sm text-accent underline">
                Contact support
              </a>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
}
