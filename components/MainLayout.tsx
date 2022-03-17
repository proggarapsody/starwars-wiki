import React, { useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import styles from '../styles/pages/mainpage.module.scss';

import Icon from './icons/Icon';
import { useTheme } from 'next-themes';
import Footer from './Footer/Footer';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => console.log(`current theme dark? ${theme == 'dark'}`), [, theme]);
  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    if (theme === 'dark') {
      setTheme('light');
    }
  };
  return (
    <>
      {typeof theme !== 'undefined' && (
        <>
          <div className={styles.siteContainer}>
            <NavBar />
            <div className={styles.mainContainer}>{children}</div>
            <button className={styles.switchThemeButton} onClick={handleTheme}>
              <Icon
                className={styles.switchThemeIcon}
                name={`${theme == 'dark' ? 'dark-theme' : 'light-theme'}`}
              />
            </button>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
