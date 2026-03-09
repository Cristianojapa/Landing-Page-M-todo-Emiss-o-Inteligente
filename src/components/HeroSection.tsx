import { motion } from "framer-motion";
import { Plane, MapPin, Globe } from "lucide-react";
import rubiaPhoto from "@/assets/rubia-photo.png";

const HOTMART_LINK = "https://hotmart.com/pt-br/marketplace/produtos/curso-de-milhas-para-iniciantes/W100490071D";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-world-pattern">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-16 right-[8%] hidden md:block"
        animate={{ y: [0, -12, 0], rotate: [45, 48, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="text-gold/15 w-28 h-28" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-[4%] hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Globe className="text-gold/10 w-20 h-20" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[3%] hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <MapPin className="text-gold/10 w-12 h-12" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-block bg-gold/10 text-gold font-heading font-semibold text-sm px-5 py-2 rounded-full mb-6 tracking-wider border border-gold/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              ✈️ Método Emissão Inteligente
            </motion.span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1] mb-6">
              Aprenda a Viajar Pagando até{" "}
              <span className="text-gold-gradient">90% Menos</span>{" "}
              Usando Milhas
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Mesmo que você nunca tenha usado milhas na vida
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <a
                href={HOTMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gold-dark via-gold to-gold-light text-primary-foreground font-heading font-bold text-lg px-12 py-4 rounded-full gold-glow-strong hover:scale-105 transition-all duration-300 tracking-wide"
              >
                QUERO COMEÇAR AGORA
              </a>
            </div>

            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-2">
              💰 Apenas <span className="text-gold font-bold text-lg">R$197,00</span> · Garantia de 7 dias
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent rounded-full blur-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/40 via-gold/20 to-gold/5 rounded-full" />
              <img
                src={rubiaPhoto}
                alt="Rubia Lemos - Especialista em Milhas"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
