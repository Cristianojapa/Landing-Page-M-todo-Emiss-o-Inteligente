import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import meiCover from "@/assets/mei-cover.jpeg";

const HOTMART_LINK = "https://hotmart.com/pt-br/marketplace/produtos/curso-de-milhas-para-iniciantes/W100490071D";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <Plane className="absolute top-10 right-[10%] text-gold/10 w-24 h-24 rotate-45 hidden md:block" />
      <Plane className="absolute bottom-20 left-[5%] text-gold/10 w-16 h-16 -rotate-12 hidden md:block" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/20 text-gold font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide">
              ✈️ Método Emissão Inteligente
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              Viaje Mais e Pague{" "}
              <span className="text-gold">Menos</span> nas Suas Passagens
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
              💰 Apenas <span className="text-gold font-bold text-lg">R$197,00</span> · Garantia de 7 dias
            </p>
          </motion.div>

          <motion.div
            className="flex-shrink-0 w-full max-w-sm md:max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={meiCover}
                alt="MEI - Método Emissão Inteligente - Viaje mais e pague menos nas suas passagens"
                className="relative w-full h-auto rounded-2xl border-2 border-gold/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
