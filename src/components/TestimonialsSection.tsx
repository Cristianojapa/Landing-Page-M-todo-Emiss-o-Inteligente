import { motion } from "framer-motion";
import feedback1 from "@/assets/feedback-1.png";
import feedback2 from "@/assets/feedback-2.png";

const feedbacks = [feedback1, feedback2];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-dark/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-heading font-bold text-2xl md:text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O Que Nossos Alunos <span className="text-gold">Dizem</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-center mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Resultados reais de pessoas como você
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {feedbacks.map((img, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-gold/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <img
                src={img}
                alt={`Depoimento de aluno ${i + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
