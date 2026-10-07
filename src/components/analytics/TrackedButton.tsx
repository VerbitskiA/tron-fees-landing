"use client";

import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type TrackedButtonProps = {
  children: ReactNode;
  /** Umami event name fired on click. */
  event: string;
  /** Optional event properties. */
  eventProps?: Record<string, string | number | boolean>;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  external?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/** Button that reports a funnel event before the default click behaviour. */
export function TrackedButton({
  event,
  eventProps,
  onClick,
  ...buttonProps
}: TrackedButtonProps) {
  return (
    <Button
      {...buttonProps}
      onClick={(e) => {
        trackEvent(event, eventProps);
        onClick?.(e);
      }}
    />
  );
}
