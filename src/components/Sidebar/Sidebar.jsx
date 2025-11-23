import React from 'react';
import styles from './Sidebar.module.css';
import { FaTachometerAlt, FaHome, FaHeartbeat, FaCalendarAlt, FaStar, FaChartBar } from 'react-icons/fa'; // Exemplo de ícones, você pode usar outros.

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>5por2</h1>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="/" className={styles.navItem}>
              <FaTachometerAlt className={styles.icon} />
              Dashboard
            </a>
          </li>
          <li>
            <a href="/WellnessScore" className={`${styles.navItem} ${styles.active}`}>
              <FaHeartbeat className={styles.icon} />
              Wellness Score
            </a>
          </li>
          <li>
            <a href="/escalas" className={styles.navItem}>
              <FaCalendarAlt className={styles.icon} />
              Escalas
            </a>
          </li>
          <li>
            <a href="/Gamificacao" className={styles.navItem}>
              <FaStar className={styles.icon} />
              Gamificação
            </a>
          </li>
          <li>
            <a href="/analytics" className={styles.navItem}>
              <FaChartBar className={styles.icon} />
              Analytics
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;