import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <Reveal className={cn("mb-12", centered ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
        {highlight ? <span className="text-gold"> {highlight}</span> : null}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
            centered ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
};

export default SectionHeading;
