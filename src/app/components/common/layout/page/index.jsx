import React from 'react';

import styles from './styles.css';

const Page = ({
  children
}) => (
  <div className={styles.page}>
    {children}
  </div>
);

export default Page;