import Link from 'next/link';
import React from 'react';
import styles from './footer.module.scss';
import { useRouter } from 'next/router';
import { gitHub } from '../../utils/urls';
const Footer = () => {
  const menuItems = [
    { text: 'Characters', href: '/characters' },
    { text: 'Planets', href: '/planets' },
    { text: 'Films', href: '/films' },
    { text: 'Vehicles', href: '/vehicles' },
    { text: 'Starships', href: '/starships' },
  ];

  const router = useRouter();

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.label}>Star Wars wiki</h1>
        </div>
        <div className={styles.sections}>
          <div className={styles.menuSection}>
            <Link href={"/"}>
              <h2 className={styles.title}>Home page</h2>
            </Link>
            {menuItems.map((el, index) => {
              return (
                <Link href={el.href} key={index}>
                  <p>{el.text}</p>
                </Link>
              );
            })}
          </div>

          <div className={styles.contactsSection}>
            <Link href={gitHub}>
              <h2 className={styles.title && styles.githubTitle}>My github</h2>
            </Link>
            {/* {menuItems.map((el) => {
            return (
              <Link href={el.href}>
                <p>{el.text}</p>
              </Link>
            );
          })} */}
          </div>

          <div className={styles.createdBySection}>
            <Link href={gitHub}>
              <p className={styles.title}>created by @proggarapsody</p>
            </Link>
            {/* {menuItems.map((el) => {
            return (
              <Link href={el.href}>
                <p>{el.text}</p>
              </Link>
            );
          })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
