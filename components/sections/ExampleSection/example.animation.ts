import { Variants } from 'framer-motion';

export const droidVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 260,
  },
  onscreen: {
    opacity: [0, 0.9, 1],
    x: 0,

    transition: {
      type: 'spring',
      stiffness: 70,
      delay: 1,
      bounce: 0.4,
      duration: 1.1,
      ease: 'easeOut',
    },
  },
};
