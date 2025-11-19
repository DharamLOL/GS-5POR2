import React from 'react';
import styles from './AIRecommendedMatches.module.css';
import { FaRobot, FaClock, FaCalendarAlt, FaGift } from 'react-icons/fa'; // Novos Ícones

const AIRecommendedMatches = () => {
  // Nomes da equipe (levando em conta a composição da página)
  const people = ['Pauline', 'Bruno', 'Dharam', 'Ana Luisa', 'Fabiano'];

  // Simulação de Saldo de Horas e Projeção
  // Pauline está com status HIGH_RISK (alerta)
  const balanceData = [
    { name: 'Pauline', currentBalance: 5, projectedBalance: 12, status: 'HIGH_RISK' },
    { name: 'Bruno', currentBalance: 2, projectedBalance: 6, status: 'NORMAL' },
    { name: 'Dharam', currentBalance: -1, projectedBalance: 0, status: 'LOW' },
    { name: 'Ana Luisa', currentBalance: 3, projectedBalance: 7, status: 'NORMAL' },
    { name: 'Fabiano', currentBalance: 0, projectedBalance: 4, status: 'NORMAL' },
  ];

  // Simulação de Sugestões de Folga (Melhores datas para equilibrar o saldo)
  const suggestedFolgaDates = [
    { date: 'Segunda, 24/11', reason: 'Baixa demanda de Suporte' },
    { date: 'Quarta, 26/11', reason: 'Excesso de operadores (4+)' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'HIGH_RISK': return styles.statusHighRisk;
      case 'NORMAL': return styles.statusNormal;
      case 'LOW': return styles.statusLow;
      default: return '';
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}><FaRobot className={styles.icon} /> Projeção e Otimização de Horas</h3>
      
      {/* ----------------- ALERTA DE HORA EXTRA ----------------- */}
      <div className={styles.alertBox}>
        <FaClock className={styles.alertIcon} />
        <p className={styles.alertText}>
          **Alerta:** **Pauline** possui +12h projetadas até o final do mês. Ação de folga recomendada.
        </p>
      </div>

      {/* ----------------- SALDO ATUAL E PROJEÇÃO ----------------- */}
      <h4 className={styles.sectionTitle}>Saldo de Horas (Atual / Projetado)</h4>
      <div className={styles.balanceList}>
        {balanceData.map(person => (
          <div key={person.name} className={styles.balanceItem}>
            <span className={`${styles.personName} ${getStatusClass(person.name === 'Pauline' ? person.status : 'NORMAL')}`}>{person.name}</span>
            <div className={styles.balanceValues}>
              <span className={styles.currentBalance}>Atual: {person.currentBalance}h</span>
              <span className={styles.projection}>Proj: {person.projectedBalance}h</span>
            </div>
          </div>
        ))}
      </div>

      {/* ----------------- OPÇÕES: OFERECER FOLGA ----------------- */}
      <h4 className={styles.sectionTitle}><FaCalendarAlt className={styles.icon} /> Sugestões de Folga</h4>
      <p className={styles.suggestionDescription}>Escolha uma data para oferecer folga à Pauline, equilibrando o saldo de horas e a demanda da equipe.</p>
      
      <div className={styles.suggestionList}>
        {suggestedFolgaDates.map(suggestion => (
          <div key={suggestion.date} className={styles.suggestionItem}>
            <div className={styles.suggestionDetails}>
                <span className={styles.suggestionDate}><FaGift /> {suggestion.date}</span>
                <span className={styles.suggestionReason}>{suggestion.reason}</span>
            </div>
            <button className={styles.sendOfferButton}>Enviar Oferta</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendedMatches;