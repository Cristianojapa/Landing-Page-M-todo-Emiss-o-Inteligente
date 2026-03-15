import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Compass,
  CreditCard,
  MapPin,
  Plane,
  Sparkles,
  Ticket,
  Wallet,
} from "lucide-react";
import rubiaPhoto from "@/assets/rubia-photo.png";
import { BorderBeam } from "./magicui/border-beam";
import BlurIn from "./magicui/blur-in";
import ShineBorder from "./magicui/shine-border";

const HOTMART_LINK = "https://hotmart.com/pt-br/marketplace/produtos/curso-de-milhas-para-iniciantes/W100490071D";

const floatingItems = [
  { Icon: Plane, top: "14%", left: "10%", size: 56, rotate: 35, opacity: 0.14 },
  { Icon: Ticket, top: "64%", left: "7%", size: 48, rotate: -18, opacity: 0.16 },
  { Icon: CreditCard, top: "18%", left: "84%", size: 58, rotate: 12, opacity: 0.16 },
  { Icon: MapPin, top: "76%", left: "86%", size: 44, rotate: -14, opacity: 0.2 },
  { Icon: Compass, top: "40%", left: "48%", size: 98, rotate: 0, opacity: 0.09 },
];

const highlights = [
  "Mesmo para quem nunca usou milhas",
  "Aulas diretas e aplicáveis",
  "Estratégias para economizar até 90%",
];

const metrics = [
  { value: "+500", label: "alunos impactados" },
  { value: "7 dias", label: "de garantia" },
  { value: "12x", label: "de R$ 20,37" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageParallax = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [24, -24],
  );

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="section-shell relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-10"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_hsl(var(--gold)/0.22),_transparent_30%),linear-gradient(180deg,hsl(var(--navy-dark)),transparent_35%,hsl(var(--background)))]" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute left-[8%] top-24 h-44 w-44 rounded-full bg-gold/20 blur-[110px] animate-pulse-soft" />
        <div className="absolute right-[10%] top-20 h-56 w-56 rounded-full bg-primary/10 blur-[120px] animate-drift" />
        <div className="absolute bottom-8 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-gold/10 blur-[140px] animate-float-soft" />

        {floatingItems.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-gold"
            style={{ top: item.top, left: item.left, opacity: item.opacity }}
            animate={{ y: [0, -26, 0], rotate: [item.rotate, item.rotate + 12, item.rotate] }}
            transition={{ duration: 6 + index * 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <item.Icon width={item.size} height={item.size} />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <motion.header
          className="premium-panel mb-10 flex flex-col gap-5 rounded-[32px] px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="flex items-center gap-4">
            <div className="gold-glow flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gold/20 bg-white p-1 md:h-16 md:w-16">
              <img
                src="/images/course-cover.webp"
                alt="Capa do curso Metodo Emissao Inteligente"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="font-heading text-lg font-bold text-foreground md:text-xl">Método Emissão Inteligente</p>
              <p className="text-sm text-muted-foreground">Curso prático para aprender milhas sem complicação</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#para-quem" className="transition-colors hover:text-gold">Para quem é</a>
            <a href="#conteudo" className="transition-colors hover:text-gold">Conteúdo</a>
            <a href="#provas" className="transition-colors hover:text-gold">Provas</a>
            <a href="#faq" className="transition-colors hover:text-gold">Dúvidas</a>
          </nav>
        </motion.header>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              <Sparkles className="h-4 w-4" />
              curso para iniciantes em milhas
            </span>

            <BlurIn duration={1.2} className="mt-6 font-heading text-3xl font-black leading-[1.05] text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
              Aprenda a Viajar Pagando até <span className="text-gold">90% Menos</span> Usando Milhas
            </BlurIn>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
              Entenda como acumular, organizar e emitir passagens com inteligência, mesmo começando absolutamente do zero.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="glass-pill rounded-2xl px-4 py-2.5 text-base text-foreground/90">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-start justify-center">
              <a
                href={HOTMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-glow btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-7 py-3.5 font-heading text-sm font-extrabold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:text-base"
              >
                Garantir minha vaga
                <ArrowRight className="h-4 w-4" />
              </a>

              <motion.a
                href="#provas"
                className="btn-shimmer inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-heading text-sm font-bold text-foreground/90 transition-colors hover:border-gold/30 hover:text-gold sm:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver resultados
              </motion.a>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-base text-muted-foreground lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <Wallet className="h-4 w-4 text-gold" />
                12x de R$ 20,37 ou R$ 197 à vista
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-gold" />
                garantia incondicional de 7 dias
              </span>
            </div>

          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[480px] lg:mt-4"
            style={{ y: imageParallax }}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ShineBorder
              className="relative mx-auto aspect-square w-full max-w-[400px] overflow-hidden rounded-full p-4 shadow-[0_0_30px_rgba(255,215,0,0.15)] bg-[radial-gradient(circle_at_top,_hsl(var(--gold)/0.18),_transparent_35%),linear-gradient(180deg,hsl(var(--navy-dark)),hsl(var(--card)))]"
              color={["#d4af37", "#f9e596", "#b08d28"]}
              borderWidth={4}
              borderRadius={9999}
              duration={8}
            >
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-3xl" />

              <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
                <img
                  src={rubiaPhoto}
                  alt="Rubia Lemos, especialista em milhas"
                  className="h-full w-full object-cover"
                />
              </div>
            </ShineBorder>

            <motion.div
              className="glass-pill pointer-events-none absolute -left-20 top-20 hidden max-w-[200px] z-20 flex-col rounded-2xl px-4 py-3 text-xs shadow-2xl xl:flex"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="font-heading text-sm font-bold text-foreground">Aulas passo a passo</div>
              <div className="text-[11px] text-muted-foreground">Sem enrolacao e sem jargao</div>
            </motion.div>

            <motion.div
              className="glass-pill pointer-events-none absolute -right-20 bottom-20 hidden max-w-[200px] z-20 flex-col rounded-2xl px-4 py-3 text-xs shadow-2xl xl:flex"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="font-heading text-sm font-bold text-gold">Economia real</div>
              <div className="text-[11px] text-muted-foreground">Transforme gastos em passagens</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

