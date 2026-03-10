import { motion } from "framer-motion";
import { Award, Compass, Plane } from "lucide-react";
import rubiaPhoto from "@/assets/rubia-photo.png";
import { BorderBeam } from "./magicui/border-beam";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Award,
    title: "10 anos de experiencia",
    desc: "Especialista em estrategia e programas de milhas.",
  },
  {
    icon: Plane,
    title: "Resultados comprovados",
    desc: "Alunos economizando com emissoes mais inteligentes.",
  },
  {
    icon: Compass,
    title: "Metodo direto",
    desc: "Passo a passo simples para quem comeca do zero.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-shell py-20 md:py-28">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="relative mx-auto w-full max-w-[420px]">
          <div className="premium-panel relative rounded-[36px] p-6 md:p-8">
            <div className="relative overflow-hidden rounded-[28px]">
              <img src={rubiaPhoto} alt="Rubia Lemos" className="h-full w-full object-cover" />
              <BorderBeam
                size={120}
                duration={6}
                delay={0}
                borderWidth={1}
                colorFrom="hsl(var(--gold))"
                colorTo="hsl(var(--gold-light))"
                className="rounded-[28px]"
              />
            </div>
          </div>

          <motion.div
            className="glass-pill absolute -left-6 bottom-8 rounded-2xl px-4 py-3 text-xs text-muted-foreground"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Educadora e estrategista de milhas
          </motion.div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Mentora"
            title="Quem e"
            highlight="Rubia Lemos"
            description="Profissional com mais de uma decada no mercado digital e experiencia em programas de milhas. O foco aqui e traduzir tudo em um metodo simples e aplicavel."
            align="left"
            className="mb-8"
          />

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="elevated-card rounded-2xl px-5 py-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-heading text-base font-bold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
