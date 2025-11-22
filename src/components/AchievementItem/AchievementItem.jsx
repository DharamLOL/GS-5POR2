import React from 'react';
import { FaCheckCircle, FaLock, FaStar } from 'react-icons/fa';
import styles from './AchievementItem.module.css';

const AchievementItem = ({ data }) => {
  const { title, description, points, isUnlocked, progress, icon } = data;

  return (
    <div className={`${styles.item} ${!isUnlocked ? styles.lockedItem : ''}`}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            {title} 
            {isUnlocked ? 
                <FaCheckCircle className={styles.statusUnlocked} /> : 
                <FaLock className={styles.statusLocked} />
            }
          </div>
          <div className={styles.points}>
            <FaStar /> +{points}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        
        {progress && !isUnlocked && (
          <div className={styles.miniProgress}>
             <div className={styles.progressInfo}>
                <span>Progresso</span>
                <span>{progress.current}/{progress.total}</span>
             </div>
             <div className={styles.miniTrack}>
                 <div 
                    className={styles.miniFill} 
                    style={{width: `${(progress.current / progress.total) * 100}%`}}
                 ></div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementItem;