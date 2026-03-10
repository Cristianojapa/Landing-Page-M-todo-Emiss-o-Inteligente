import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
  once?: boolean;
}

const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 0.7,
  distance = 36,
  direction = "up",
  once = true,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  const offset = reduceMotion
    ? {}
    : direction === "up"
      ? { y: distance }
      : direction === "down"
        ? { y: -distance }
        : direction === "left"
          ? { x: distance }
          : { x: -distance };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default Reveal;
