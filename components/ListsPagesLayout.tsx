import React from 'react';
import styles from '../styles/pages/listspages.module.scss';

const ListsPagesLayout: React.FC = ({ children}) => {
  return <div className={styles.container}>{children}</div>;
};

export default ListsPagesLayout;
