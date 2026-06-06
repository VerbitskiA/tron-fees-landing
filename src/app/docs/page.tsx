import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getSupportUrl, siteConfig } from "@/lib/config";

const endpoints = [
  "POST /api/users/register",
  "GET /api/users/me/by-telegram/{telegramUserId}",
  "POST /api/users/addresses",
  "GET /api/energy-delegation/pricing-estimate",
  "POST /api/energy-delegation/orders",
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

        <h1 className="text-3xl font-bold">API Documentation</h1>
        <p className="mt-4 text-muted">
          Full API documentation is coming soon. In the meantime, contact
          support for API access and integration guidance.
        </p>

        <div className="mt-8 glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Base URL</h2>
          <code className="mt-2 block rounded-lg bg-white/5 px-4 py-3 text-sm text-accent">
            {siteConfig.apiBaseUrl}
          </code>
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Key endpoints</h2>
          <ul className="mt-4 space-y-2">
            {endpoints.map((endpoint) => (
              <li key={endpoint}>
                <code className="text-sm text-muted">{endpoint}</code>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Button href={getSupportUrl()} external variant="primary">
            Contact Support for API Access
          </Button>
        </div>
      </Container>
    </div>
  );
}
