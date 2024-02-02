"use client";

import { Variants, motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

const aboutSectionVariants: Variants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4,
    },
  },
};

export const MoveInDiv: FC<PropsWithChildren<{}>> = ({ children }) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}
    variants={aboutSectionVariants}
  >
    {children}
  </motion.div>
);
