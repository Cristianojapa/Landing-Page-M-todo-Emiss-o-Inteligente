import { motion } from "framer-motion";
import { Rocket, Coins, CreditCard, Ticket, ShieldAlert } from "lucide-react";

const topics = [
  { icon: Rocket, title: "Como começar do zero no mundo das milhas" },
  { icon: Coins, title: "Como acumular milhas com gastos do dia a dia" },
  { icon: CreditCard, title: "Como escolher e usar cartões de forma estratégica" },
  { icon: Ticket, title: "Como resgatar passagens com milhas" },
  { icon: ShieldAlert, title: "Como evitar erros que fazem perder dinheiro" },
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-dark/40">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-heading font-bold text-2xl md:text-4xl text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O Que Você Vai <span className="text-gold-gradient">Aprender</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-5 card-premium rounded-xl p-5 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/25 to-gold/5 flex items-center justify-center flex-shrink-0">
                <topic.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="font-heading font-semibold text-foreground/90">{topic.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
