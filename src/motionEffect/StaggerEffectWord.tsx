"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const variable = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const StaggerEffectWord = ({
  id,
  children,
  className,
}: {
  id: number;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <motion.span
        className={`${className}`}
        key={id}
        variants={variable}
        initial="initial"
        whileInView="animate"
        custom={id}
      >
        {children}
      </motion.span>
    </>
  );
};

export default StaggerEffectWord;
