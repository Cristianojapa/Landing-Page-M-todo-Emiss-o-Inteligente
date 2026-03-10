import { motion } from "framer-motion";
import { Coins, CreditCard, Rocket, ShieldAlert, Ticket } from "lucide-react";
import Reveal, { staggerContainer, staggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import ShineBorder from "./magicui/shine-border";

const topics = [
  {
    icon: Rocket,
    title: "Como começar do zero no universo das milhas",
    description: "Entenda os fundamentos sem linguagem complicada e monte sua base com segurança.",
  },
  {
    icon: Coins,
    title: "Como acumular milhas com gastos que você já faz",
    description: "Aprenda a enxergar oportunidades no seu dia a dia sem precisar inventar novas despesas.",
  },
  {
    icon: CreditCard,
    title: "Como escolher cartões e programas com estratégia",
    description: "Saiba o que vale a pena, o que evitar e como não cair em promessas rasas.",
  },
  {
    icon: Ticket,
    title: "Como pesquisar e emitir passagens com mais inteligência",
    description: "Descubra a lógica por trás das emissões para fazer resgates mais vantajosos.",
  },
  {
    icon: ShieldAlert,
    title: "Como evitar erros que fazem muita gente perder dinheiro",
    description: "Fuja dos atalhos perigosos e das decisões que queimam pontos ou travam resultados.",
  },
];

const WhatYouLearnSection = () => {
  return (
    <section id="conteudo" className="section-shell py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Conteúdo do curso"
            title="O que você vai"
            highlight="dominar"
            description="A formação foi organizada para transformar teoria em ação. Você entende a lógica, aprende a tomar decisões melhores e sai com um plano mais claro para emitir suas viagens."
            align="left"
            className="mb-8"
          />

          <div className="premium-panel rounded-[32px] p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-gold">resultado prático</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Você vai sair sabendo onde concentrar seus esforços, como organizar seu acúmulo e como emitir com muito mais confiança.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-heading text-2xl font-black text-gold">5 módulos</div>
                <p className="mt-1 text-sm text-muted-foreground">para entender a jornada inteira do iniciante à emissão</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-heading text-2xl font-black text-gold">100% online</div>
                <p className="mt-1 text-sm text-muted-foreground">acesso no seu ritmo, de qualquer dispositivo</p>
              </div>
            </div>
          </div>
        </Reveal>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {topics.map((topic) => (
            <motion.div key={topic.title} variants={staggerItem}>
              <ShineBorder
                className="rounded-[28px] border border-white/8 bg-card/70 px-3 py-3"
                color={["hsl(var(--gold))", "hsl(var(--gold-light))", "hsl(var(--primary))"]}
                duration={12}
              >
                <div className="elevated-card rounded-[22px] p-5 md:p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{topic.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{topic.description}</p>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
