import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './navbar.module.scss';
import { useState } from 'react';
import Icon, { MIcon } from '../icons/Icon';
import { motion } from 'framer-motion';

const menuItems = [
  { text: 'Characters', href: '/characters' },
  { text: 'Planets', href: '/planets' },
  { text: 'Films', href: '/films' },
  { text: 'Vehicles', href: '/vehicles' },
  { text: 'Starships', href: '/starships' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(!open);
  };

  const menuVariants = {
    closed: {
      x: -150,
      transition: {
        type: 'tween',
        duration: 0.05,
        delay: 0,
        staggerChildren: 0.8,
      },
    },
    opened: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.05,
        staggerChildren: 0.8,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.4,
        staggerChildren: 0.8,
      },
    },
    opened: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.4,
        staggerChildren: 0.8,
      },
    },
  };

  return (
    <>
      <MIcon className={styles.navbarCloseButton} name={'navbar-button'} onClick={handleOpen} />
      <motion.div
        className={styles.navbar}
        animate={open ? 'opened' : 'closed'}
        initial="closed"
        variants={menuVariants}
      >
        <MIcon className={styles.navbarButton} name={'navbar-button'} onClick={handleOpen} />
        <div className={styles.navbarItems}>
          {menuItems.map(({ text, href }, index) => (
            <Link
              href={href}
              // onClick={(e) => {
              //   // e.currentTarget.parentElement?.childNodes.forEach(el => {
              //   //   el.
              //   // })
              //   // e.currentTarget.classList.add('active');
              //   router.push(href);
              // }}
              key={index}
            >
              <motion.p
                className={styles.navbarItem}
                initial="closed"
                whileInView="opened"
                variants={linkVariants}
              >
                {text}
              </motion.p>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
