import { Variants } from 'framer-motion';

export const sectionVariants: Variants = {
  offscreen: {
    y: 350,
    opacity: 0,
  },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.7,
      delay: 0.3 * (i || 1),
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  }),
};

export const imgVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.7,
      delay: 0.4 * (i || 1),
    },
  }),
};

export const staggerContainerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const staggerChildVars: Variants = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      delay: 0.5,
    },
  },
};

export const creditsVars: Variants = {
  hidden: { opacity: 0, y: 400 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 10,
      delay: 0.4,
    },
  },
};
