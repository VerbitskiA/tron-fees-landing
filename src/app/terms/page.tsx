import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getSupportHandle, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service — TronVolt",
  description:
    "Terms of Service for the TronVolt TRON Energy delegation service (Telegram bot and API).",
};

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-foreground">{children}</h2>;
}

export default function TermsPage() {
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

        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: October 2026</p>

        <div className="mt-8 max-w-none space-y-6 text-muted">
          <p>
            These Terms govern your use of {siteConfig.name} — a TRON Energy
            delegation service operated via a Telegram bot and a REST API.
            By using the service you agree to these terms.
          </p>

          <H>1. The service</H>
          <p>
            {siteConfig.name} rents TRON Energy to your address for a limited
            time (currently 1 hour packages), which reduces network fees for
            TRON transactions such as USDT TRC-20 transfers. We never take
            custody of your wallet, keys or tokens: you pay a fixed price per
            order and energy is delegated on-chain to the address you specify.
          </p>

          <H>2. Orders and payment</H>
          <p>
            Each order is paid separately in cryptocurrency via a third-party
            payment processor. An order is executed after the payment is
            confirmed on-chain, usually within a minute. Unpaid orders expire
            after 24 hours with no charge. Prices are shown before payment and
            may change over time; the price at order creation is the price you
            pay.
          </p>

          <H>3. Failed orders and refunds</H>
          <p>
            If an order cannot be executed after a confirmed payment (for
            example, the energy provider rejects it), contact support{" "}
            {getSupportHandle()} — the paid amount will be refunded or the order
            re-executed at our discretion. Refunds are made in the cryptocurrency
            originally paid.
          </p>

          <H>4. Referral program</H>
          <p>
            Users earn rewards on paid orders of users they invite (by default
            50% of the order margin). Rewards are service credits: they are
            applied automatically as a discount (up to 80% of the order price)
            on the inviter&apos;s own orders. Rewards have no cash value, cannot
            be withdrawn and do not accrue interest. We may change reward rates
            for future orders at any time; changes do not affect already accrued
            credits.
          </p>

          <H>5. Acceptable use</H>
          <p>
            The service may not be used for illegal purposes, sanctioned
            addresses, or abuse (multi-accounting, automation attacks on the
            referral program). We may refuse service and cancel accrued rewards
            in cases of abuse.
          </p>

          <H>6. No warranty; limitation of liability</H>
          <p>
            The service is provided &quot;as is&quot;. TRON network conditions,
            third-party providers and payment processors are outside our
            control. Our total liability for any claim is limited to the amount
            paid for the order giving rise to the claim.
          </p>

          <H>7. Changes</H>
          <p>
            We may update these terms; the current version is always available
            at this page. Continued use after changes means acceptance.
          </p>

          <H>8. Contact</H>
          <p>
            Questions: {getSupportHandle()} on Telegram.
          </p>
        </div>
      </Container>
    </div>
  );
}
