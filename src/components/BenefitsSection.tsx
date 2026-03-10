import { motion } from "framer-motion";
import { DollarSign, Monitor, ShieldCheck, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";

const benefits = [
  {
    icon: Zap,
    title: "Acesso imediato",
    desc: "Liberacao rapida apos a confirmacao do pagamento.",
  },
  {
    icon: Monitor,
    title: "Estude no seu ritmo",
    desc: "Conteudo online e direto, de qualquer dispositivo.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de 7 dias",
    desc: "Risco zero para testar o metodo com tranquilidade.",
  },
  {
    icon: DollarSign,
    title: "Condicao acessivel",
    desc: "12x de R$ 20,37 ou R$ 197 a vista.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-shell py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Beneficios"
          title="Por que esse curso"
          highlight="faz sentido agora"
          description="Um caminho claro, sem promessa vazia. O foco e colocar voce em acao com seguranca."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((item) => (
            <motion.div key={item.title} variants={staggerItem} className="elevated-card rounded-[28px] p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
