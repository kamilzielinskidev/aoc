"use client";

import { HTMLMotionProps, Variants, motion } from "framer-motion";
import { FC } from "react";

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

export const MoveInDiv: FC<HTMLMotionProps<"div">> = (props) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}
    variants={aboutSectionVariants}
    {...props}
  />
);
