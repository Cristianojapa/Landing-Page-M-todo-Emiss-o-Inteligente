import { motion } from "framer-motion";
import { CreditCard, HelpCircle, Plane, SearchX } from "lucide-react";

const profiles = [
  {
    icon: CreditCard,
    text: "Usa cartão de crédito no dia a dia mas nunca aproveitou milhas",
  },
  {
    icon: HelpCircle,
    text: "Acha que milhas são complicadas e não sabe por onde começar",
  },
  {
    icon: Plane,
    text: "Quer viajar mais gastando muito menos dinheiro",
  },
  {
    icon: SearchX,
    text: "Está cansado de dicas soltas e confusas da internet",
  },
];

const ForWhoSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-heading font-bold text-2xl md:text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Para Quem é o <span className="text-gold-gradient">Curso?</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-14 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Se você se identifica com algum desses perfis, esse curso foi feito para você
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {profiles.map((item, i) => (
            <motion.div
              key={i}
              className="card-premium rounded-xl p-7 text-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-5 gold-glow">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
