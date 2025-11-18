import React from 'react';
import styles from './AIRecommendedMatches.module.css';
import { FaRobot } from 'react-icons/fa'; // Ícone de IA

const AIRecommendedMatches = () => {
  const matches = [
    {
      id: 1,
      name: 'João Silva',
      reason: 'Melhor combinação + Carga baixa',
      matchScore: '80% Match',
      avatar: 'https://via.placeholder.com/40/007bff/ffffff?text=JS' // Placeholder
    },
    {
      id: 2,
      name: 'Maria Santos',
      reason: 'Flexibilidade + Cliente bom',
      matchScore: '92% Match',
      avatar: 'https://via.placeholder.com/40/28a745/ffffff?text=MS' // Placeholder
    },
  ];

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}><FaRobot className={styles.icon} /> Matches Sugeridos pela IA</h3>
      <div className={styles.matchList}>
        {matches.map(match => (
          <div key={match.id} className={styles.matchItem}>
            <img src={match.avatar} alt={match.name} className={styles.avatar} />
            <div className={styles.matchDetails}>
              <span className={styles.matchName}>{match.name}</span>
              <span className={styles.matchReason}>{match.reason}</span>
            </div>
            <span className={styles.matchScore}>{match.matchScore}</span>
            <button className={styles.connectButton}>Conectar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendedMatches;