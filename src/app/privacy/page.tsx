import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

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
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

        <div className="prose prose-invert mt-8 max-w-none space-y-6 text-muted">
          <p>
            This Privacy Policy describes how {siteConfig.name} collects, uses,
            and protects your information.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p>
            We may collect Telegram user IDs, wallet addresses, transaction
            data related to Energy orders, and usage information necessary to
            provide our services.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            2. How We Use Information
          </h2>
          <p>
            Information is used to process Energy delegation orders, provide
            customer support, and improve our services.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            3. Data Sharing
          </h2>
          <p>
            We do not sell your personal information. Data may be shared with
            payment processors and infrastructure providers necessary to deliver
            the service.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            4. Contact
          </h2>
          <p>
            For privacy-related inquiries, contact us via Telegram support.
          </p>
          <p className="text-sm">
            This is a placeholder document. A complete Privacy Policy will be
            published before public launch.
          </p>
        </div>
      </Container>
    </div>
  );
}
