import { motion } from "framer-motion";
import { Rocket, Coins, CreditCard, Ticket, ShieldAlert } from "lucide-react";
import ShineBorder from "./magicui/shine-border";
import BlurIn from "./magicui/blur-in";

const topics = [
  { icon: Rocket, title: "Como começar do zero no mundo das milhas" },
  { icon: Coins, title: "Como acumular milhas com gastos do dia a dia" },
  { icon: CreditCard, title: "Como escolher e usar cartões de forma estratégica" },
  { icon: Ticket, title: "Como resgatar passagens com milhas" },
  { icon: ShieldAlert, title: "Como evitar erros que fazem perder dinheiro" },
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <BlurIn
          className="font-heading font-bold text-2xl md:text-4xl text-center mb-12"
          duration={0.8}
        >
          O Que Você Vai <span className="text-gold">Aprender</span>
        </BlurIn>

        <div className="max-w-2xl mx-auto space-y-4">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ShineBorder
                className="flex flex-row items-center gap-4 bg-card rounded-xl p-5 border border-border w-full !justify-start relative overflow-hidden"
                color={["hsl(var(--gold))", "hsl(var(--primary))", "hsl(var(--gold-light))"]}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <topic.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="font-heading font-semibold text-foreground/90">{topic.title}</p>
              </ShineBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
