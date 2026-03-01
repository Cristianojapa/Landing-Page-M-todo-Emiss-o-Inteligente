import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("cmi-countdown-end");
    if (saved) {
      const diff = Math.max(0, Math.floor((Number(saved) - Date.now()) / 1000));
      return diff;
    }
    // 24 hours from now
    const end = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("cmi-countdown-end", String(end));
    return 24 * 60 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-navy-dark py-3 text-center">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <span className="text-gold font-heading font-bold uppercase tracking-wider">
          ⏰ Oferta por tempo limitado:
        </span>
        <div className="flex gap-1">
          {[
            { value: pad(hours), label: "h" },
            { value: pad(minutes), label: "m" },
            { value: pad(seconds), label: "s" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-0.5">
              <span className="bg-primary text-primary-foreground font-heading font-bold px-2 py-1 rounded text-lg md:text-xl min-w-[2.5rem] text-center">
                {item.value}
              </span>
              <span className="text-muted-foreground text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
