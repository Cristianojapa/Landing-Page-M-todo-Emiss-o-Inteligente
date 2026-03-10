import { motion } from "framer-motion";
import { Plane, Ticket, CreditCard, MapPin, Compass } from "lucide-react";
import rubiaPhoto from "@/assets/rubia-photo.png";
import BlurIn from "./magicui/blur-in";
import { BorderBeam } from "./magicui/border-beam";

const HOTMART_LINK = "https://hotmart.com/pt-br/marketplace/produtos/curso-de-milhas-para-iniciantes/W100490071D";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 z-0">
      {/* Floating Travel Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[
          { Icon: Plane, top: "15%", left: "10%", size: 60, rotate: 45, opacity: 0.1 },
          { Icon: Ticket, top: "60%", left: "15%", size: 50, rotate: -20, opacity: 0.15 },
          { Icon: CreditCard, top: "20%", left: "80%", size: 60, rotate: 15, opacity: 0.15 },
          { Icon: MapPin, top: "75%", left: "85%", size: 45, rotate: -15, opacity: 0.2 },
          { Icon: Compass, top: "45%", left: "50%", size: 100, rotate: 0, opacity: 0.08 },
          { Icon: Plane, top: "85%", left: "40%", size: 40, rotate: -45, opacity: 0.1 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-gold"
            style={{ top: item.top, left: item.left, opacity: item.opacity }}
            animate={{
              y: [0, -30, 0],
              rotate: [item.rotate, item.rotate + 15, item.rotate],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon width={item.size} height={item.size} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/20 text-gold font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide">
              MEI Método Emissao inteligente
            </span>

            <BlurIn className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 mt-4">
              Aprenda a Viajar Pagando até{" "}
              <span className="text-gold">90% Menos</span> Usando Milhas
            </BlurIn>

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
              💰 Apenas <span className="text-gold font-bold text-lg">12x de R$ 20,37</span> (ou R$ 197 à vista) · Garantia de 7 dias
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-2xl" />
              <img
                src={rubiaPhoto}
                alt="Rubia Lemos - Especialista em Milhas"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-gold/30 shadow-2xl"
              />
              <BorderBeam size={200} duration={12} delay={9} colorFrom="hsl(var(--gold))" colorTo="hsl(var(--gold-light))" className="rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
