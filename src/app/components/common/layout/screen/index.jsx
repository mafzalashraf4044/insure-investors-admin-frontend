import React from 'react';

import styles from './styles.css';

const Screen = ({
  children
}) => (
  <div className={styles.screen}>
    {children}
  </div>
);

export default Screen;