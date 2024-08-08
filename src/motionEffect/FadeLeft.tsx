"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
const FadeLeft = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, translateX: -70 }}
      whileInView={{ opacity: 1, translateX: 0, transition: { duration: 0.7 } }}
    >
      {children}
    </motion.div>
  );
};
export default FadeLeft;
