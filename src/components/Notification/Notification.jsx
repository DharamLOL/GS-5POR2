import React from 'react';
import styles from './Notification.module.css';
import { FaPlusSquare, FaExchangeAlt, FaRegCalendarAlt } from 'react-icons/fa';

const Notification = ({ icon, text, type }) => {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'plus': return <FaPlusSquare />;
      case 'exchange': return <FaExchangeAlt />;
      case 'calendar': return <FaRegCalendarAlt />;
      default: return null;
    }
  };

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      {getIcon(icon)}
      <span className={styles.notificationText}>{text}</span>
    </div>
  );
};

export default Notification;