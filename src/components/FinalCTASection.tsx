import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const HOTMART_LINK = "https://hotmart.com/pt-br/marketplace/produtos/curso-de-milhas-para-iniciantes/W100490071D";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-navy-dark to-background relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-extrabold text-2xl md:text-4xl lg:text-5xl mb-6">
            Não Perca Essa <span className="text-gold">Oportunidade</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Comece hoje a transformar seus gastos em viagens dos sonhos. Por apenas <span className="text-gold font-bold">R$42,00</span>.
          </p>

          <a
            href={HOTMART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-heading font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6"
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
