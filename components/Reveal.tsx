"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { EASE } from "@/lib/motion";

type RevealProps = Omit<HTMLMotionProps<"div">, "ref"> & {
  delay?: number;
  x?: number;
  y?: number;
};

const Reveal = ({ children, delay = 0, x = 0, y = 40, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, x, y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
