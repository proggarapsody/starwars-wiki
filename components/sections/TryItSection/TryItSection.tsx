import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import styles from './try-it-section.module.scss';
import Icon from '../../icons/Icon';
import starFighter from '../../public/images/starfighter.png';
import ordenStarFighter from '../../../public/images/orden-starfighter.png';
import skywalker from '../../../public/images/skywalker.png';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { sectionVariants } from './../../../utils/animation.variants';

const TryItSection = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.section
      className={styles.tryIt}
      id="tryit-section"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8, once: true }}
    >
      <div className={styles.tryItHeader}>
        <motion.p variants={sectionVariants} className={styles.tryItLabel}>
          Here you can find info about films, characters, and e.t.c from Star Wars universal
        </motion.p>
        <motion.div custom={0.2} className={styles.tryItHeaderIcon} variants={sectionVariants}>
          {typeof theme !== 'undefined' && theme == 'dark' ? (
            <Image src={ordenStarFighter} width={508} height={574} />
          ) : (
            <Image src={skywalker} />
          )}
        </motion.div>
      </div>
      <motion.div variants={sectionVariants}>
        <Link href={'#menu-section'}>
          <motion.button custom={2} variants={sectionVariants} className={styles.tryItButton}>
            {typeof theme !== 'undefined' && (
              <Icon name={theme == 'dark' ? 'vader' : 'skywalker'} className={styles.tryItIcon} />
            )}

            <p className={styles.tryItText}>Try it</p>
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default TryItSection;
