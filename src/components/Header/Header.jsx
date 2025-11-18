import React from 'react';
import styles from './Header.module.css';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.rightSection}>
        <FaBell className={styles.icon} />
        <FaUserCircle className={styles.icon} />
      </div>
    </header>
  );
};

export default Header;