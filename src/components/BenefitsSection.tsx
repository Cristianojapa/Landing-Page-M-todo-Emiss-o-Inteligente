import { motion } from "framer-motion";
import { Zap, Monitor, ShieldCheck, DollarSign } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Acesso imediato", desc: "Após confirmação do pagamento" },
  { icon: Monitor, title: "Estude no seu ritmo", desc: "De qualquer dispositivo" },
  { icon: ShieldCheck, title: "Garantia de 7 dias", desc: "Satisfação incondicional" },
  { icon: DollarSign, title: "Apenas R$197,00", desc: "Investimento acessível" },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-dark/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-heading font-bold text-2xl md:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Por Que <span className="text-gold">Escolher</span> Este Curso?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
