import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter cartão de crédito?",
    a: "Não necessariamente! No curso você vai aprender diferentes formas de acumular milhas, inclusive sem cartão de crédito. Mas ter um cartão potencializa muito seus resultados.",
  },
  {
    q: "O curso funciona mesmo para iniciantes?",
    a: "Sim! O curso foi pensado especialmente para quem nunca usou milhas na vida. Tudo é explicado de forma simples, passo a passo, do zero.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Você terá acesso ao conteúdo completo do curso para estudar no seu ritmo, sem pressa.",
  },
  {
    q: "E se eu não gostar?",
    a: "Sem problemas! Você tem 7 dias de garantia incondicional. Se não gostar, basta pedir o reembolso e devolvemos 100% do seu investimento.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-heading font-bold text-2xl md:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Perguntas <span className="text-gold">Frequentes</span>
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/30"
              >
                <AccordionTrigger className="font-heading font-semibold text-left hover:text-gold transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
