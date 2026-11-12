"use client";

import Image from "next/image";
import { motion } from "motion/react";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ type = "button", title, icon, variant, full, href, onClick, disabled }: ButtonProps) => {
  const className = `flexCenter gap-3 rounded-full border ${variant} ${full ? "w-full" : ""} ${
    disabled ? "pointer-events-none opacity-60" : ""
  }`;

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  };

  const content = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 cursor-pointer whitespace-nowrap">{title}</span>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} className={className} {...motionProps}>
      {content}
    </motion.button>
  );
};

export default Button;
