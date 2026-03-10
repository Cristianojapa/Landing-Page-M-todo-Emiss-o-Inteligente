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
    <section className="py-16 md:py-24 bg-navy-dark/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-heading font-bold text-2xl md:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Para Quem é o <span className="text-gold">Curso?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {profiles.map((item, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-xl p-6 text-center border border-border hover:border-gold/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
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
