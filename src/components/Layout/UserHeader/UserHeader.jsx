import React from 'react';
import { FaStar } from 'react-icons/fa';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styles from './UserHeader.module.css';

const UserHeader = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className={styles.userName}>{user.name}</h2>
            <p className={styles.userRole}>{user.role}</p>
          </div>
        </div>
        
        <div className={styles.pointsDisplay}>
          <div className={styles.pointsValue}>
            <FaStar className={styles.starIcon} /> {user.points}
          </div>
          <p className={styles.pointsLabel}>Pontos disponíveis</p>
        </div>
      </div>

      <div>
        <div className={styles.wellnessHeader}>
            <span>Nível de Bem-Estar</span>
            <span className={styles.wellnessPercent}>{user.wellnessLevel}%</span>
        </div>
        <ProgressBar percentage={user.wellnessLevel} showLabels={true} />
      </div>
    </div>
  );
};

export default UserHeader;