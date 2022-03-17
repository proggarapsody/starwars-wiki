import React from 'react';
import styles from './header.module.scss';
import Icon, { MIcon } from '../icons/Icon';
import r2d2 from '../../public/images/r2d2.png';
import vader from '../../public/images/vader.png';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import { imgVariants, sectionVariants } from '../../utils/animation.variants';
const Header = () => {
  const { theme, setTheme } = useTheme();

  const variants: Variants = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',

        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const svgVariants: Variants = {
    hidden: {
      opacity: 0,
      display: 'none',
    },
    show: {
      opacity: 1,
      display: 'inline-flex',
      transition: {
        type: 'spring',
        duration: 1,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div className={styles.header}>
      {typeof theme !== 'undefined' && (
        <>
          <MIcon
            name="main-logo"
            className={styles.mainLogo}
            initial="hidden"
            animate="show"
            variants={svgVariants}
          />

          <motion.div
            initial="hidden"
            animate="show"
            variants={imgVariants}
            custom={2}
            className={theme == 'light' ? styles.headerImg : styles.headerDarkImg}
          >
            {theme == 'light' ? <Image src={r2d2} /> : <Image src={vader} />}
          </motion.div>
          <motion.div
            className={styles.headerBanner}
            initial="hidden"
            animate="show"
            variants={variants}
          ></motion.div>
          <Link href={'#tryit-section'}>
            <div className={styles.headerLetsStarted}>
              <Icon name="c3po" className={styles.cpoIcon} />

              <Icon name="lets-started" className={styles.letsStartedIcon} />
            </div>
          </Link>
        </>
      )}
    </motion.div>
  );
};

export default Header;
