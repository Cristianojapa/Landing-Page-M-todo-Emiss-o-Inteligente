import CountdownTimer from "@/components/CountdownTimer";
import HeroSection from "@/components/HeroSection";
import ForWhoSection from "@/components/ForWhoSection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeedbackVideoSection from "@/components/FeedbackVideoSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CountdownTimer />
      <HeroSection />
      <ForWhoSection />
      <WhatYouLearnSection />
      <TestimonialsSection />
      <FeedbackVideoSection />
      <AboutSection />
      <BenefitsSection />
      <FAQSection />
      <FinalCTASection />

      <footer className="py-6 text-center text-muted-foreground text-xs border-t border-border">
        <p>© {new Date().getFullYear()} Rubia Lemos · Curso de Milhas Método Emissão Inteligente</p>
      </footer>
    </main>
  );
};

export default Index;
