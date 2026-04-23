import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import feedback1 from "@/assets/feedback-1.png";
import feedback2 from "@/assets/feedback-2.png";
import feedback3 from "@/assets/feedback-3.png";
import feedback4 from "@/assets/feedback-4.png";

const feedbacks = [feedback1, feedback2, feedback3, feedback4];

// ── Section ───────────────────────────────────────────────────────────────────
const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-dark relative overflow-hidden flex flex-col items-center">
      {/* Background glow for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            O Que Nossos Alunos <span className="text-gold">Dizem</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Resultados reais de pessoas que já aplicam o método
          </p>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm md:text-base font-semibold shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Quote className="w-4 h-4" />
            +500 alunos satisfeitos
          </div>
        </motion.div>

        {/* Symmetric 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          {feedbacks.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group h-full"
            >
              <div className="h-full relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 hover:border-gold/40 bg-navy/90 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-1 p-3 md:p-5 flex items-center justify-center">
                <img
                  src={img}
                  alt={`Depoimento ${i + 1}`}
                  className="w-full h-auto object-contain rounded-xl transition-opacity duration-300"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/20 rounded-2xl md:rounded-3xl transition-colors duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
