import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FaTachometerAlt, FaHome, FaHeartbeat, FaCalendarAlt, FaStar, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>5por2</h1>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/" className={styles.navItem}>
              <FaTachometerAlt className={styles.icon} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/WellnessScore" className={`${styles.navItem} ${styles.active}`}>
              <FaHeartbeat className={styles.icon} />
              Wellness Score
            </Link>
          </li>
          <li>
            <Link to="/escalas" className={styles.navItem}>
              <FaCalendarAlt className={styles.icon} />
              Escalas
            </Link>
          </li>
          <li>
            <Link to="/Gamificacao" className={styles.navItem}>
              <FaStar className={styles.icon} />
              Gamificação
            </Link>
          </li>
          <li>
            <Link to="/analytics" className={styles.navItem}>
              <FaChartBar className={styles.icon} />
              Analytics
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;