import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
