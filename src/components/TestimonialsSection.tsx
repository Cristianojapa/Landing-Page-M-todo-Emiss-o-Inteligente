import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import feedback1 from "@/assets/feedback-1.png";
import feedback2 from "@/assets/feedback-2.png";
import feedback3 from "@/assets/feedback-3.png";
import feedback4 from "@/assets/feedback-4.png";
import feedback5 from "@/assets/feedback-5.png";

const feedbacks = [feedback1, feedback2, feedback3, feedback4, feedback5];
const allFeedbacks = [...feedbacks, ...feedbacks];

// ── Section ───────────────────────────────────────────────────────────────────
const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-navy-dark/50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-gold text-gold" />
            ))}
          </div>

          <h2 className="font-heading font-bold text-2xl md:text-4xl mb-3">
            O Que Nossos Alunos <span className="text-gold">Dizem</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Resultados reais de pessoas como você
          </p>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium">
            <Quote className="w-3.5 h-3.5" />
            +500 alunos satisfeitos
          </div>
        </motion.div>

        {/* Single marquee row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="relative w-full overflow-hidden marquee-wrapper py-2">
            {/* Fade edges — narrower on mobile */}
            <div className="absolute inset-y-0 left-0 w-10 sm:w-20 md:w-40 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-10 sm:w-20 md:w-40 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 md:gap-4 w-max items-center animate-marquee-left">
              {allFeedbacks.map((img, i) => (
                <div
                  key={i}
                  className="
                    w-[200px] sm:w-[260px] md:w-[310px]
                    flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden
                    border border-white/10 hover:border-gold/40
                    bg-navy/70 backdrop-blur-sm
                    transition-all duration-300
                    hover:scale-[1.03] hover:shadow-2xl hover:shadow-gold/10
                    p-2 cursor-default select-none group
                  "
                >
                  <img
                    src={img}
                    alt={`Depoimento de aluno ${(i % feedbacks.length) + 1}`}
                    className="w-full h-auto object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hint — hidden on mobile to save space */}
        <motion.p
          className="hidden md:block text-center text-muted-foreground/50 text-sm mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Passe o mouse para pausar
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
