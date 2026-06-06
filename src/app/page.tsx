import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Benefits } from "@/components/sections/Benefits";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { TrustSection } from "@/components/sections/TrustSection";
import { UseCases } from "@/components/sections/UseCases";
import { WhyEnergy } from "@/components/sections/WhyEnergy";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <HowItWorks />
        <SavingsCalculator />
        <UseCases />
        <WhyEnergy />
        <TrustSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
