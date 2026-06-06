"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { getSupportHandle, MAX_SAVINGS_PERCENT } from "@/lib/config";

const faqs = [
  {
    question: "What is TRON Energy?",
    answer:
      "TRON Energy is a network resource required to execute smart contract transactions. When you interact with tokens, DEXs, or other contracts, Energy is consumed. Without enough Energy, TRX is burned from your wallet to pay fees.",
  },
  {
    question: "How much can I save?",
    answer: `Savings depend on transaction volume and Energy package, but users typically save up to ${MAX_SAVINGS_PERCENT}% compared to burning TRX directly. Use our calculator above to estimate your savings.`,
  },
  {
    question: "How fast is delegation?",
    answer:
      "Energy is usually delegated within a minute after payment is confirmed. Most orders complete in under 60 seconds.",
  },
  {
    question: "Do I need to stake TRX?",
    answer:
      "No. TronVolt handles Energy delegation for you — no staking, freezing TRX, or technical setup required.",
  },
  {
    question: "Can I integrate TronVolt into my service?",
    answer: `Yes. For now, integration is handled through our support team at ${getSupportHandle()}. Contact us to set up automated Energy purchasing for your bots, services, or business. A public API is in development.`,
  },
  {
    question: "Which wallets are supported?",
    answer:
      "Any valid TRON wallet address (starting with T) can receive delegated Energy. Popular wallets like TronLink, Trust Wallet, and exchange deposit addresses are supported.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about TronVolt and TRON Energy."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-4 text-sm text-muted">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
