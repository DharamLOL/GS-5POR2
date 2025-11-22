import React from 'react';
import styles from './SectionCard.module.css';

const SectionCard = ({ title, subtitle, icon, isStore = false, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
            {icon && (
                <div className={isStore ? styles.iconStore : styles.icon}>
                    {icon}
                </div>
            )}
            <div>
                <h3 className={styles.title}>{title}</h3>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default SectionCard;