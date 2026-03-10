import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock3, ShieldCheck, Sparkles } from "lucide-react";

const CountdownTimer = () => {
  const reduceMotion = useReducedMotion();
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("cmi-countdown-end");
    if (saved) {
      return Math.max(0, Math.floor((Number(saved) - Date.now()) / 1000));
    }

    const end = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("cmi-countdown-end", String(end));
    return 24 * 60 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (value: number) => String(value).padStart(2, "0");

  const segments = [
    { value: pad(hours), label: "horas" },
    { value: pad(minutes), label: "min" },
    { value: pad(seconds), label: "seg" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-navy-dark/80 backdrop-blur-xl">
      <div className="container grid gap-2 py-2 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-wrap items-center justify-center gap-3 text-center md:justify-start md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3 w-3" />
            Oferta ativa
          </span>
          <div className="flex items-center gap-2 text-xs text-foreground/90 md:text-sm">
            <Clock3 className="h-3.5 w-3.5 text-gold" />
            <span>Encerra em</span>
          </div>
          <p className="hidden max-w-xl text-xs text-muted-foreground md:block">
            Condicao especial e acesso imediato antes do contador zerar.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
          {segments.map((item) => (
            <div
              key={item.label}
              className="gold-glow rounded-xl border border-gold/20 bg-gradient-to-b from-gold/15 to-gold/5 px-2.5 py-1.5 text-center min-w-[62px]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.value}
                  className="font-heading text-base font-extrabold text-foreground md:text-lg"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.value}
                </motion.div>
              </AnimatePresence>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold/90">
                {item.label}
              </div>
            </div>
          ))}

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-muted-foreground lg:flex">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            garantia de 7 dias
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

