import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

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
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

        <div className="prose prose-invert mt-8 max-w-none space-y-6 text-muted">
          <p>
            These Terms of Service govern your use of {siteConfig.name} and
            related services, including the Telegram bot and API.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            1. Service Description
          </h2>
          <p>
            {siteConfig.name} provides TRON Energy delegation services. By using
            our services, you agree to these terms.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            2. User Responsibilities
          </h2>
          <p>
            You are responsible for providing accurate wallet addresses and
            ensuring you have authority to use the addresses you provide.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            3. Payments
          </h2>
          <p>
            All payments are processed through supported payment providers.
            Prices are displayed before purchase and are subject to change.
          </p>
          <h2 className="text-xl font-semibold text-foreground">
            4. Limitation of Liability
          </h2>
          <p>
            {siteConfig.name} is provided &quot;as is&quot; without warranties.
            We are not liable for losses resulting from incorrect wallet
            addresses, network issues, or third-party service failures.
          </p>
          <p className="text-sm">
            This is a placeholder document. A complete Terms of Service will be
            published before public launch.
          </p>
        </div>
      </Container>
    </div>
  );
}
