import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;