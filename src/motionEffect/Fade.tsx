"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
const Fade = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, translateY: 40 }}
      whileInView={{ opacity: 1, translateY: 0, transition: { duration: 0.7 } }}
    >
      {children}
    </motion.div>
  );
};
export default Fade;
