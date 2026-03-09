import { motion } from "framer-motion";
import { Play } from "lucide-react";
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

        {/* Video testimonial */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-gold/30 transition-colors">
            <video
              controls
              preload="metadata"
              className="w-full h-auto"
              poster=""
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
