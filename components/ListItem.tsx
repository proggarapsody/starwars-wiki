import Link from 'next/link';
import React from 'react';
import styles from '../styles/components/list-item.module.scss';
import { staggerChildVars } from './../utils/animation.variants';
import { motion } from 'framer-motion';

const ListItem = React.forwardRef(
  (
    {
      children,
      href,
    }: {
      children: React.ReactChild;
      href: string;
    },
    ref: any
  ) => {
    return (
      <Link href={href}>
        <motion.div className={styles.listItem} variants={staggerChildVars} ref={ref}>
          {children}
        </motion.div>
      </Link>
    );
  }
);

export const MListItem = motion(ListItem);
export default ListItem;
