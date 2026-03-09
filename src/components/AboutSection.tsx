import { motion } from "framer-motion";
import rubiaPhoto from "@/assets/rubia-photo.png";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-dark/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/30 via-gold/10 to-transparent rounded-full blur-xl" />
              <img
                src={rubiaPhoto}
                alt="Rubia Lemos"
                className="relative w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-2 border-gold/30 shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              Quem é <span className="text-gold-gradient">Rubia Lemos?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com mais de <strong className="text-foreground">6 anos de experiência</strong> no mercado digital e na Hotmart, Rubia se tornou referência quando o assunto é <strong className="text-foreground">milhas aéreas</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ela já ajudou centenas de alunos a economizar milhares de reais em viagens, transformando gastos do dia a dia em passagens aéreas com até 90% de desconto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Seu método é simples, direto e pensado especialmente para quem está começando do zero — sem jargões complicados, sem enrolação.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
