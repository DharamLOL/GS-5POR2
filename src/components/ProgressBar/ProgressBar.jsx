import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ percentage, showLabels = false }) => {
  return (
    <div className={styles.container}>
      <div className={styles.track}>
        <div 
          className={styles.fill} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showLabels && (
        <div className={styles.labels}>
          <span>Iniciante</span>
          <span>Intermediário</span>
          <span>Avançado</span>
          <span>Expert</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;