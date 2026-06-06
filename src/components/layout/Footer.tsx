import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getSupportUrl, getTelegramBotUrl, siteConfig } from "@/lib/config";

const footerLinks = [
  { label: "Telegram Bot", href: getTelegramBotUrl() ?? "#", external: true },
  { label: "Terms of Service", href: "/terms", external: false },
  { label: "Privacy Policy", href: "/privacy", external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) =>
              link.external && link.href !== "#" ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={getSupportUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Support
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
