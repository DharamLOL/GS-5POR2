import React from 'react';
import styles from './ScoreBreakdown.module.css';

const ScoreBreakdown = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Breakdown por Fatores</h3>
      <div className={styles.scoresGrid}>
        <div className={styles.scoreItem}>
          <p className={styles.scoreLabel}>Work-life balance score</p>
          <span className={styles.scoreValue}>85 pts</span>
          <p className={styles.scoreDetail}>Current period</p>
        </div>
        <div className={styles.scoreItem}>
          <p className={styles.scoreLabel}>Score</p>
          <span className={styles.scoreValue}>92</span>
          <p className={styles.scoreDetail}>Role rotation factor</p>
        </div>
        <div className={styles.scoreItem}>
          <p className={styles.scoreLabel}>Score</p>
          <span className={styles.scoreValue}>88</span>
          <p className={styles.scoreDetail}>Satisfação da Equipe</p>
        </div>
        {/* Você pode adicionar mais itens aqui conforme necessário */}
      </div>
      <div className={styles.additionalFactors}>
        <p className={styles.factorLabel}>Equilíbrio Horas/Folgas</p>
        <p className={styles.factorLabel}>Rotatividade de Funções</p>
        <p className={styles.factorLabel}>Satisfação da Equipe</p>
      </div>
    </div>
  );
};

export default ScoreBreakdown;