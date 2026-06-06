"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getTelegramBotUrl, MAX_SAVINGS_PERCENT } from "@/lib/config";

export function Hero() {
  const botUrl = getTelegramBotUrl();

  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="hero-glow absolute inset-0 -z-10" />
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="animate-pulse-glow mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-accent/10 glow-accent"
          >
            <Zap className="h-10 w-10 text-accent" fill="currentColor" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Save Up to{" "}
            <span className="gradient-text">{MAX_SAVINGS_PERCENT}%</span> on TRON Transaction Fees
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg text-muted sm:text-xl"
          >
            Rent TRON Energy instantly and reduce transaction costs without
            burning TRX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {botUrl ? (
              <Button href={botUrl} external variant="primary">
                Open Telegram Bot
              </Button>
            ) : (
              <Button variant="primary" disabled>
                Configure Telegram Bot URL
              </Button>
            )}
            <Button href="#how-it-works" variant="secondary">
              Learn More
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
