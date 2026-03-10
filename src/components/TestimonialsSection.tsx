import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";
import feedback1 from "@/assets/feedback-1.png";
import feedback2 from "@/assets/feedback-2.png";
import feedback3 from "@/assets/feedback-3.png";
import feedback4 from "@/assets/feedback-4.png";
import feedback5 from "@/assets/feedback-5.png";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const feedbacks = [feedback1, feedback2, feedback3, feedback4, feedback5];
const carouselItems = [...feedbacks, ...feedbacks];

const TestimonialsSection = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 2600, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const carouselParallax = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [20, -20],
  );
  const routeParallax = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [28, -28],
  );

  return (
    <section id="provas" ref={sectionRef} className="section-shell py-20 md:py-28">
      <div className="container relative">
        <SectionHeading
          eyebrow="Provas reais"
          title="Depoimentos de"
          highlight="alunos que viajaram mais"
          description="Resultados de pessoas comuns que aplicaram o metodo e comecaram a emitir com muito mais seguranca."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="premium-panel rounded-[32px] p-6 md:p-8">
            <div className="flex items-center gap-2 text-gold">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-gold" />
              ))}
              <span className="text-sm text-muted-foreground">avaliacao media dos alunos</span>
            </div>

            <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
              +500 alunos confiando no metodo
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Os comentarios mostram resultados reais: economia em passagens, clareza na escolha de cartoes e mais
              autonomia para emitir.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Economia imediata em viagens",
                "Passo a passo sem jargoes",
                "Resultados aplicaveis desde a primeira aula",
                "Apoio direto para quem e iniciante",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
              <Quote className="h-4 w-4" />
              depoimentos reais, sem filtros
            </div>
          </Reveal>

          <Reveal className="relative">
            <motion.div className="relative" style={{ y: carouselParallax }}>
              <motion.svg
                className="absolute -left-10 top-6 hidden h-[320px] w-[240px] text-gold/40 lg:block"
                viewBox="0 0 240 320"
                fill="none"
                style={{ y: routeParallax }}
              >
                <path
                  className="route-dash"
                  d="M18 20 C120 40 80 160 200 170 C140 180 120 280 220 300"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="18" cy="20" r="6" fill="currentColor" />
                <circle cx="220" cy="300" r="6" fill="currentColor" />
              </motion.svg>

              <div className="absolute -right-4 top-6 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted-foreground lg:flex">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                arraste ou passe o mouse
              </div>

              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[autoplay.current]}
                className="relative overflow-visible"
              >
                <CarouselContent className="-ml-4">
                  {carouselItems.map((img, index) => (
                    <CarouselItem key={`${img}-${index}`} className="pl-4 sm:basis-1/2 xl:basis-1/3">
                      <div className="elevated-card group h-full rounded-[26px] p-3">
                        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-navy/60">
                          <img
                            src={img}
                            alt={`Depoimento de aluno ${(index % feedbacks.length) + 1}`}
                            className="h-full w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="left-2 top-1/2 hidden -translate-y-1/2 border-white/10 bg-navy-dark/80 text-foreground hover:border-gold/40 hover:text-gold md:flex" />
                <CarouselNext className="right-2 top-1/2 hidden -translate-y-1/2 border-white/10 bg-navy-dark/80 text-foreground hover:border-gold/40 hover:text-gold md:flex" />
              </Carousel>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
