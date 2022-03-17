import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import Icon from '../../icons/Icon';
import styles from './menu-section.module.scss';
import falcon from '../../../public/images/falcon.png';
import MenuItem, { MMenuItem } from './MenuItem';
import { motion, Variants } from 'framer-motion';

const menuItems = [
  { text: 'Characters', href: '/characters' },
  { text: 'Planets', href: '/planets' },
  { text: 'Films', href: '/films' },
  { text: 'Vehicles', href: '/vehicles' },
  { text: 'Starships', href: '/starships' },
];

const MenuSection = () => {
  const { theme, setTheme } = useTheme();

  const variants: Variants = {
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
      },
    }),
  };

  return (
    <motion.section
      className={styles.menu}
      id="menu-section"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8, once: true }}
    >
      <motion.div className={styles.menuImage} variants={variants}>
        {theme == 'dark' ? (
          <Icon className={styles.stormTrooper} name="stormtrooper" />
        ) : (
          <Image width={609} height={560} src={falcon} />
        )}
      </motion.div>

      <div className={styles.menuItems}>
        {menuItems.map((el, i) => {
          return (
            <MMenuItem key={i} variants={variants} custom={i + 0.5} href={el.href} text={el.text} />
          );
        })}
      </div>
    </motion.section>
  );
};

export default MenuSection;
