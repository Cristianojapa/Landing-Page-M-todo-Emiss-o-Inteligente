import { motion } from "framer-motion";
import { BadgeCheck, Coins, PlayCircle, Sparkles, Ticket } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import Reveal, { staggerContainer, staggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

const FeedbackVideoSection = () => {
  return (
    <section id="video" className="section-shell py-20 md:py-28 bg-navy-dark/30">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="relative">
          <div className="premium-panel relative rounded-[32px] p-4 md:p-6">
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold">
              <PlayCircle className="h-4 w-4" />
              depoimento em video
            </div>

            <div className="relative overflow-hidden rounded-[26px] border border-white/10">
              <video className="h-full w-full" controls preload="metadata" playsInline>
                <source src="/feedback-video.mp4" type="video/mp4" />
                Seu navegador nao suporta videos.
              </video>
              <BorderBeam
                size={200}
                duration={10}
                delay={1.5}
                colorFrom="hsl(var(--gold))"
                colorTo="hsl(var(--gold-light))"
                className="rounded-[26px]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-6">
          <SectionHeading
            eyebrow="Feedback em video"
            title="Veja como o metodo"
            highlight="funciona na pratica"
            description="O depoimento mostra o caminho real de quem aplicou o passo a passo e passou a emitir com mais seguranca."
            align="left"
            className="mb-6"
          />

          <motion.div
            className="grid gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              "Mostra o passo a passo de uma emissao real",
              "Explica como economizar e evitar erros comuns",
              "Reforca que o metodo e acessivel mesmo para iniciantes",
            ].map((item) => (
              <motion.div key={item} variants={staggerItem} className="elevated-card rounded-2xl px-5 py-4">
                <div className="flex items-start gap-3 text-foreground/90">
                  <Sparkles className="mt-0.5 h-4 w-4 text-gold" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 text-gold">
                <Ticket className="h-4 w-4" />
                emissao real no dia a dia
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 text-gold">
                <Coins className="h-4 w-4" />
                economia comprovada
              </div>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
            <BadgeCheck className="h-4 w-4" />
            garantia incondicional de 7 dias
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FeedbackVideoSection;
