import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Preciso ter cartao de credito?",
    a: "Nao necessariamente. No curso voce aprende diferentes formas de acumular milhas, inclusive sem cartao. Ainda assim, um cartao bem escolhido ajuda a acelerar resultados.",
  },
  {
    q: "Funciona para iniciantes?",
    a: "Sim. O metodo foi construido para quem nunca usou milhas e precisa de um passo a passo claro, sem termos complicados.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "O acesso ao conteudo do curso fica disponivel para estudar no seu ritmo, com calma.",
  },
  {
    q: "E se eu nao gostar?",
    a: "Voce tem 7 dias de garantia. Se nao fizer sentido para voce, basta solicitar o reembolso dentro desse prazo.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-shell py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Duvidas frequentes"
          title="Perguntas que"
          highlight="todo iniciante faz"
          description="Respostas diretas para voce decidir com clareza e sem inseguranca."
        />

        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${index}`}
                className="elevated-card rounded-2xl border border-white/10 px-6"
              >
                <AccordionTrigger className="font-heading text-left text-base font-semibold text-foreground transition-colors hover:text-gold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQSection;
