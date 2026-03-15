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
      <div className="container flex flex-col items-center justify-center gap-2 py-2 md:grid md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-center md:gap-2 md:justify-start md:text-left">
          <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.05em] text-gold md:gap-1.5 md:px-3 md:py-1 md:text-[11px] md:tracking-[0.2em]">
            <Sparkles className="h-2.5 w-2.5 md:h-3 md:w-3" />
            Oferta ativa
          </span>
          <div className="flex items-center gap-1 text-[9px] text-foreground/90 md:text-sm md:gap-2">
            <Clock3 className="h-3 w-3 text-gold md:h-3.5 md:w-3.5" />
            <span>Encerra em</span>
          </div>
          <p className="hidden max-w-xl text-xs text-muted-foreground md:block">
            Condicao especial e acesso imediato antes do contador zerar.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 md:justify-end">
          {segments.map((item) => (
            <div
              key={item.label}
              className="gold-glow rounded-md border border-gold/20 bg-gradient-to-b from-gold/15 to-gold/5 px-1 py-0.5 text-center min-w-[38px] md:rounded-xl md:px-2.5 md:py-1.5 md:min-w-[62px]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.value}
                  className="font-heading text-xs font-bold text-foreground md:text-lg md:font-extrabold"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.value}
                </motion.div>
              </AnimatePresence>
              <div className="text-[7px] uppercase tracking-[0.05em] text-gold/90 md:text-[10px] md:tracking-[0.18em]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

