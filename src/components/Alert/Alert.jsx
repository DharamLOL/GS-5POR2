// src/components/Alert/Alert.jsx
import React from 'react';
import styles from './Alert.module.css';

const Alert = ({ message, type = 'info' }) => {
  const alertClass = `${styles.alert} ${styles[type]}`;
  return (
    <div className={alertClass}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;