// src/components/RewardItem/RewardItem.jsx
import React from 'react';
import { FaStar, FaLock } from 'react-icons/fa'; 
import styles from './RewardItem.module.css';

const RewardItem = ({ data }) => {
  const { title, description, cost, available, icon } = data;

  const buttonClass = available ? styles.active : styles.disabled;

  return (
    <div className={`${styles.item} ${!available ? styles.lockedItem : ''}`}> 
      <div className={styles.iconBackground}> 
        {icon}
        {!available && <FaLock className={styles.lockIcon} />} {/* Cadeado se indisponível */}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
           <h4 className={styles.title}>{title}</h4>
           <div className={styles.cost}>
             <FaStar /> {cost}
           </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <button 
        className={`${styles.button} ${buttonClass}`} 
        disabled={!available}
      >
        {available ? 'Resgatar' : 'Indisponível'}
      </button>
    </div>
  );
};

export default RewardItem;