import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getSupportUrl, getTelegramBotUrl } from "@/lib/config";

export function FinalCta() {
  const botUrl = getTelegramBotUrl();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-background to-accent/10 p-12 text-center glow-primary">
          <div className="hero-glow absolute inset-0 -z-10 opacity-50" />
          <h2 className="text-3xl font-bold sm:text-4xl">
            Start Saving on TRON Fees Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Join thousands of users who rent Energy instead of burning TRX.
            Open the Telegram bot and save on your next transaction.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {botUrl ? (
              <Button href={botUrl} external variant="primary">
                <Send className="h-4 w-4" />
                Open Telegram Bot
              </Button>
            ) : (
              <Button variant="primary" disabled>
                Configure Telegram Bot URL
              </Button>
            )}
            <Button href={getSupportUrl()} external variant="secondary">
              <MessageCircle className="h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
