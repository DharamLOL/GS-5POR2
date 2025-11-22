// src/components/Card/Card.jsx
import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, value, unit, color, icon: Icon }) => {
  return (
    <div className={styles.card} style={{ borderLeft: `5px solid ${color}` }}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {Icon && <Icon className={styles.cardIcon} style={{ color: color }} />}
      </div>
      <div className={styles.cardContent}>
        <span className={styles.cardValue}>{value}</span>
        {unit && <span className={styles.cardUnit}>{unit}</span>}
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.arrow}>↗</span>
      </div>
    </div>
  );
};

export default Card;