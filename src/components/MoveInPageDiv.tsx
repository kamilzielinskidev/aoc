"use client";

import { Variants, motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

const moveInPageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};

export const MoveInPageDiv: FC<PropsWithChildren<{}>> = ({ children }) => (
  <motion.div
    initial="initial"
    exit="exit"
    animate="animate"
    variants={moveInPageVariants}
  >
    {children}
  </motion.div>
);
