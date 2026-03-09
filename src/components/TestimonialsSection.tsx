import { motion } from "framer-motion";
import feedback1 from "@/assets/feedback-1.png";
import feedback2 from "@/assets/feedback-2.png";

const feedbacks = [feedback1, feedback2];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-heading font-bold text-2xl md:text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O Que Nossos Alunos <span className="text-gold-gradient">Dizem</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-center mb-14 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Resultados reais de pessoas como você
        </motion.p>

        {/* Video testimonial */}
        <motion.div
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card-premium rounded-xl overflow-hidden transition-all duration-300">
            <video
              controls
              preload="metadata"
              className="w-full h-auto"
            >
              <source src="/videos/feedback-video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            <div className="p-4 text-center">
              <p className="text-muted-foreground text-sm font-heading">🎬 Depoimento em vídeo de aluno(a)</p>
            </div>
          </div>
        </motion.div>

        {/* Image testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {feedbacks.map((img, i) => (
            <motion.div
              key={i}
              className="card-premium rounded-xl overflow-hidden transition-all duration-300"
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
