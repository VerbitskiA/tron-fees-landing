import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getSupportHandle, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy — TronVolt",
  description:
    "What data TronVolt collects (Telegram ID, TRON addresses, order records), why, and how it is protected.",
};

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-foreground">{children}</h2>;
}

export default function PrivacyPage() {
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

        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: October 2026</p>

        <div className="mt-8 max-w-none space-y-6 text-muted">
          <p>
            This policy describes what data {siteConfig.name} collects and why.
            We collect the minimum needed to run the service — no email, no
            personal documents, no ad trackers.
          </p>

          <H>1. What we collect</H>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="text-foreground">Telegram ID and username</span> —
              when you use the bot; needed to identify your account, orders and
              referral rewards.
            </li>
            <li>
              <span className="text-foreground">TRON addresses</span> — the
              addresses you send energy to; needed to execute your orders.
            </li>
            <li>
              <span className="text-foreground">Order and payment records</span>{" "}
              — amounts, statuses and processor payment IDs. The payment
              processor (a third party) additionally handles your transaction
              data under its own policy.
            </li>
            <li>
              <span className="text-foreground">Usage analytics</span> —
              aggregated, cookieless, collected by our own self-hosted analytics
              (no third-party trackers, no cross-site profiling).
            </li>
          </ul>

          <H>2. Why we use it</H>
          <p>
            To execute orders, prevent abuse, provide support, and improve the
            service. We do not sell or share your data for marketing.
          </p>

          <H>3. Who processes it</H>
          <p>
            Data is stored on our infrastructure. Two categories of third
            parties are involved in providing the service: the payment processor
            (sees your payment transaction) and the energy provider (sees the
            target TRON address for delegation). That&apos;s it.
          </p>

          <H>4. Retention and your rights</H>
          <p>
            Order and reward records are kept while your account exists (they
            are the ledger of your rewards). You may request deletion of your
            account and associated data via support {getSupportHandle()} — we
            will remove everything except what we must keep for accounting of
            completed payments.
          </p>

          <H>5. Contact</H>
          <p>Privacy questions: {getSupportHandle()} on Telegram.</p>
        </div>
      </Container>
    </div>
  );
}
