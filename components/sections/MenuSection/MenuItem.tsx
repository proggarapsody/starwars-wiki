import React, { forwardRef, useEffect } from 'react';
import Icon, { MIcon } from '../../icons/Icon';
import styles from './menuitem.module.scss';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface MenuItemProps {
  href: string;
  text: string;
}

const MenuItem = React.forwardRef(({ href, text }: MenuItemProps, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Link href={href} scroll={true}>
        <div className={styles.menuItem} ref={ref}>
          <MIcon name={theme.toString() == 'dark' && theme ? 'empire' : 'rebel'} />
          <p className={styles.menuItemText}>{text}</p>
        </div>
      </Link>
    </div>
  );
});

export const MMenuItem = motion(MenuItem, { forwardMotionProps: true });
export default MenuItem;
