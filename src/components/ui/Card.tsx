import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(109,40,255,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}
