import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  external?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 glow-primary hover:shadow-[0_0_30px_rgba(109,40,255,0.4)]",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-accent/50 hover:bg-white/10",
  ghost: "text-muted hover:text-white hover:bg-white/5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200";

export function Button({
  children,
  variant = "primary",
  href,
  external,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith("#") || href.startsWith("http")) {
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
