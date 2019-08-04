import React from 'react';

import styles from './styles.css';

const PageContent = ({
  children
}) => (
  <div className={styles.pageContent}>
    {children}
  </div>
);

export default PageContent;