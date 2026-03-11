import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Globe from "./magicui/globe";
import ShineBorder from "./magicui/shine-border";

const HOTMART_LINK =
  "https://hotmart.com/pt-br/marketplace/produtos/curso-de-milhas-para-iniciantes/W100490071D";

const FinalCTASection = () => {
  return (
    <section id="cta" className="section-shell relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--gold)/0.18),_transparent_35%),linear-gradient(180deg,hsl(var(--navy-dark)),hsl(var(--background)))]" />
      <div className="pointer-events-auto absolute -bottom-28 right-[-140px] z-0 hidden h-[380px] w-[380px] opacity-75 lg:block">
        <div className="relative h-full w-full">
          <Globe className="top-0" />
        </div>
      </div>
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-5xl rounded-[40px]">
          <ShineBorder
            className="premium-panel flex h-full w-full flex-col justify-center overflow-hidden rounded-[40px] px-6 py-12 text-center shadow-2xl md:px-10"
            color={["#d4af37", "#f9e596", "#b08d28"]}
            borderWidth={2}
            borderRadius={40}
            duration={10}
          >
            <SectionHeading
              eyebrow="Ultima chamada"
              title="Pronto para viajar"
              highlight="pagando menos?"
              description="Entre agora no Metodo Emissao Inteligente e comece a transformar seus gastos em passagens mais baratas."
            />

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-gold" />
                12x de R$ 20,37 ou R$ 197 a vista
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" />
                garantia incondicional de 7 dias
              </span>
            </div>

            <motion.a
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-glow btn-shimmer mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-10 py-5 font-heading text-base font-extrabold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              whileHover={{ scale: 1.03 }}
            >
              garantir minha vaga agora
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              acesso imediato + aulas passo a passo
            </div>
          </ShineBorder>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
