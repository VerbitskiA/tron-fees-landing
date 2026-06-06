"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getTelegramBotUrl, siteConfig } from "@/lib/config";

const navLinks = [
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#calculator", label: "Calculator" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const botUrl = getTelegramBotUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="gradient-text">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            {botUrl ? (
              <Button href={botUrl} external variant="primary" className="px-4 py-2">
                Open Telegram Bot
              </Button>
            ) : (
              <span className="text-xs text-muted">Set NEXT_PUBLIC_TELEGRAM_BOT_URL</span>
            )}
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open ? (
          <nav className="flex flex-col gap-4 border-t border-white/5 py-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {botUrl ? (
              <Button href={botUrl} external variant="primary" className="w-full">
                Open Telegram Bot
              </Button>
            ) : null}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
