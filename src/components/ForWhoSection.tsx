import { motion } from "framer-motion";
import { CreditCard, HelpCircle, Plane, SearchX } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";

const profiles = [
  {
    icon: CreditCard,
    text: "Usa cartão de crédito no dia a dia, mas ainda não transforma isso em milhas.",
  },
  {
    icon: HelpCircle,
    text: "Acha o universo das milhas confuso e quer um caminho claro para começar.",
  },
  {
    icon: Plane,
    text: "Quer viajar com mais frequência sem comprometer tanto o orçamento.",
  },
  {
    icon: SearchX,
    text: "Cansou de consumir dicas soltas da internet sem saber o que realmente funciona.",
  },
];

const ForWhoSection = () => {
  return (
    <section id="para-quem" className="section-shell py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Perfil ideal"
          title="Esse curso foi feito para quem quer"
          highlight="parar de adivinhar"
          description="Você não precisa chegar com conhecimento técnico. A proposta aqui é tirar o caos da frente e mostrar um processo simples, aplicável e pensado para iniciantes."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {profiles.map((item, index) => (
            <motion.article
              key={item.text}
              variants={staggerItem}
              className="elevated-card group rounded-[28px] p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="font-heading text-sm font-bold text-gold/70">0{index + 1}</span>
              </div>

              <p className="text-base leading-relaxed text-foreground/90">{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;
