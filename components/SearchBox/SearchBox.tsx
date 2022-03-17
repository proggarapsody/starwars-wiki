import React from 'react';
import styles from './searchbox.module.scss';
const SearchBox = ({ onChange, onFocus }: { onChange: any; onFocus: any }) => {
  return (
    <div className={styles.searchbox}>
      <input type="text" placeholder="Search..." onChange={onChange} onFocus={onFocus} />
    </div>
  );
};

export default SearchBox;
