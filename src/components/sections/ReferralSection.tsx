import { Gift, Send, Share2, TrendingUp } from "lucide-react";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getTelegramBotUrl } from "@/lib/config";

const steps = [
  {
    icon: Share2,
    step: "Step 1",
    title: "Share your invite link",
    description:
      "Every user gets a personal invite link in the bot — share it with friends, chats, or your community.",
  },
  {
    icon: TrendingUp,
    step: "Step 2",
    title: "Earn on every order",
    description:
      "You earn a reward each time someone you invited pays for energy — credited automatically.",
  },
  {
    icon: Gift,
    step: "Step 3",
    title: "Spend rewards on energy",
    description:
      "Rewards apply as a discount of up to 80% on your own energy orders — no withdrawal hassle.",
  },
];

export function ReferralSection() {
  const botUrl = getTelegramBotUrl();

  return (
    <Section
      id="referral"
      title="Referral Program"
      subtitle="Invite friends, earn rewards on their orders, and spend them on your energy."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((item) => (
          <Card key={item.title}>
            <div className="flex items-center justify-between">
              <item.icon className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium text-accent">{item.step}</span>
            </div>
            <h3 className="mt-3 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        {botUrl ? (
          <TrackedButton
            href={botUrl}
            external
            variant="primary"
            event="cta_bot_click"
            eventProps={{ location: "referral" }}
          >
            <Send className="h-4 w-4" />
            Get Your Invite Link
          </TrackedButton>
        ) : (
          <Button variant="primary" disabled>
            Configure Telegram Bot URL
          </Button>
        )}
        <p className="text-sm text-muted">
          Open the bot and check the <span className="text-white">Referrals</span> section — your link
          and reward balance are already there.
        </p>
      </div>
    </Section>
  );
}
