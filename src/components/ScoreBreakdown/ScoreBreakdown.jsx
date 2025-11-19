import React from 'react';
import styles from './ScoreBreakdown.module.css';
import { FaTrophy, FaCalendarCheck, FaBullseye } from 'react-icons/fa';

const ScoreBreakdown = () => {
  // Dados de Simulação
  const metaScore = 92; // Meta da equipe

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Fatores Chave de Performance</h3>
      <div className={styles.scoresGrid}>
        
        {/* 1. Score de Equilíbrio Vida-Trabalho (Ligado ao Risco/Escalas) */}
        <div className={`${styles.scoreItem} ${styles.scoreWorkLife}`}>
          <FaCalendarCheck className={styles.scoreIcon} />
          <p className={styles.scoreLabel}>Equilíbrio Vida-Trabalho</p>
          <span className={styles.scoreValue}>85 pts</span>
          <p className={styles.scoreDetail}>
            <span className={styles.targetLabel}>Meta: 100 pts</span> 
            <span className={styles.actionNote}>(Ações de folga pendentes)</span>
          </p>
        </div>
        
        {/* 2. Score de Metas (Substitui Role Rotation Factor) */}
        <div className={`${styles.scoreItem} ${styles.scoreGoals}`}>
          <FaBullseye className={styles.scoreIcon} />
          <p className={styles.scoreLabel}>Média de Metas (Time)</p>
          <span className={styles.scoreValue}>{metaScore}%</span>
          <p className={styles.scoreDetail}>
            <span className={styles.targetLabel}>Mês: R$ 100K</span>
            <span className={styles.actionNote}>vs. R$ 85K Atuais</span>
          </p>
        </div>
        
        {/* 3. Satisfação da Equipe */}
        <div className={`${styles.scoreItem} ${styles.scoreSatisfaction}`}>
          <FaTrophy className={styles.scoreIcon} />
          <p className={styles.scoreLabel}>Satisfação da Equipe</p>
          <span className={styles.scoreValue}>88%</span>
          <p className={styles.scoreDetail}>
            <span className={styles.targetLabel}>Último Feedback</span>
          </p>
        </div>
        
      </div>
      
      {/* Removemos a div additionalFactors, pois as métricas estão claras no grid */}
    </div>
  );
};

export default ScoreBreakdown;