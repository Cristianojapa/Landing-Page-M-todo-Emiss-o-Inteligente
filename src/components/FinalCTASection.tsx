import { motion } from "framer-motion";
import { ShieldCheck, Plane } from "lucide-react";

const HOTMART_LINK = "https://hotmart.com/pt-br/marketplace/produtos/curso-de-milhas-para-iniciantes/W100490071D";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-background to-navy-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />
      <motion.div
        className="absolute top-10 right-[10%] hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="text-gold/10 w-20 h-20 rotate-45" />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-extrabold text-2xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Não Perca Essa{" "}
            <span className="text-gold-gradient">Oportunidade</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Comece hoje a transformar seus gastos em viagens dos sonhos. Por apenas{" "}
            <span className="text-gold font-bold">R$197,00</span>.
          </p>

          <a
            href={HOTMART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-gold-dark via-gold to-gold-light text-primary-foreground font-heading font-bold text-lg md:text-xl px-14 py-5 rounded-full gold-glow-strong hover:scale-105 transition-all duration-300 mb-8 tracking-wide"
          >
            GARANTIR MINHA VAGA AGORA
          </a>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <ShieldCheck className="w-5 h-5 text-gold" />
            <span>Garantia incondicional de 7 dias</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
