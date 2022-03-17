import { Variants } from 'framer-motion';
import { TransitionDefinition } from 'framer-motion/types/types';

export const droidVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 260,
  },
  onscreen: {
    opacity: [0, 0.9, 1],
    x: 0,

    transition: {
      delay: 1,
      type: 'spring' as unknown as TransitionDefinition,
      stiffness: 70 as TransitionDefinition,
      bounce: 0.4,
      duration: 1.1,
      ease: 'easeOut',
    },
  },
};
