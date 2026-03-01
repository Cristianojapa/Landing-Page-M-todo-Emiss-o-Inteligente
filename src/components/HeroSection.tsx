import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import rubiaPhoto from "@/assets/rubia-photo.png";

const HOTMART_LINK = "https://hotmart.com/pt-br/marketplace/produtos/curso-de-milhas-para-iniciantes/W100490071D";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Decorative planes */}
      <Plane className="absolute top-10 right-[10%] text-gold/10 w-24 h-24 rotate-45 hidden md:block" />
      <Plane className="absolute bottom-20 left-[5%] text-gold/10 w-16 h-16 -rotate-12 hidden md:block" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/20 text-gold font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide">
              ✈️ Curso 100% Online
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              Aprenda a Viajar Pagando até{" "}
              <span className="text-gold">90% Menos</span> Usando Milhas
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Mesmo que você nunca tenha usado milhas na vida
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <a
                href={HOTMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                QUERO COMEÇAR AGORA
              </a>
            </div>

            <p className="text-muted-foreground text-sm">
              💰 Apenas <span className="text-gold font-bold text-lg">R$42,00</span> · Garantia de 7 dias
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-2xl" />
              <img
                src={rubiaPhoto}
                alt="Rubia Lemos - Especialista em Milhas"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-gold/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
