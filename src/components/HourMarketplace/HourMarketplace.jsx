import React from 'react';
import styles from './HourMarketplace.module.css';
import { FaHistory } from 'react-icons/fa';

const HourMarketplace = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Mercado de Horas</h3>
        <button className={styles.historyButton}><FaHistory /> Ver Histórico</button>
      </div>
      <p className={styles.description}>Sistema inteligente de matching para troca de turnos e horas extras</p>
      
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Ofertas Ativas</span>
          <span className={styles.statValue}>12</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Matches Sugeridos</span>
          <span className={styles.statValue}>8</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Taxa de Sucesso</span>
          <span className={styles.statValue}>87%</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Horas Trocadas</span>
          <span className={styles.statValue}>124</span>
        </div>
      </div>
    </div>
  );
};

export default HourMarketplace;