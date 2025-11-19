import React from 'react';
import styles from './HourMarketplace.module.css';
import { FaHistory, FaExchangeAlt, FaRobot, FaCheck, FaTimes } from 'react-icons/fa'; // Novos Ícones

const HourMarketplace = () => {
  // Nomes da equipe para simulação
  const people = ['Pauline', 'Bruno', 'Dharam', 'Ana Luisa', 'Fabiano'];
  
  // Simulação de Ofertas Ativas
  const activeOffers = [
    { id: 1, type: 'OFFER', description: 'Pauline oferece 4h extras na Sexta-feira (11h-15h)', user: 'Pauline' },
    { id: 2, type: 'REQUEST', description: 'Bruno busca folga na Quinta-feira (Turno da manhã)', user: 'Bruno' },
    { id: 3, type: 'OFFER', description: 'Fabiano oferece plantão noturno Terça-feira', user: 'Fabiano' },
  ];

  // Simulação de Matches Sugeridos (baseado na lógica do calendário/disponibilidade)
  const suggestedMatches = [
    { 
      id: 101, 
      offer: 'Pauline (4h Extras Sexta)', 
      match: 'Fabiano (Compatível - 3h disponíveis)',
      score: '95%'
    },
    { 
      id: 102, 
      offer: 'Bruno (Busca Folga Quinta)', 
      match: 'Ana Luisa (Disponível e sem conflito)',
      score: '88%'
    },
  ];

  // Simulação do Histórico (Transações Anteriores)
  const transactionHistory = [
    { id: 201, date: '15/11', action: 'Troca de turno com Dharam', status: 'Aprovada' },
    { id: 202, date: '10/11', action: 'Oferta de 6h extras', status: 'Concluída' },
  ];

  const handleAction = (matchId, actionType) => {
    console.log(`${actionType} para o Match ID: ${matchId}`);
    // Aqui seria a lógica para enviar a aprovação/recusa para o backend
    alert(`${actionType} para o Match ID ${matchId} (Simulação)`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}><FaExchangeAlt className={styles.icon} /> Mercado de Horas</h3>
        <button className={styles.historyButton}><FaHistory /> Ver Histórico ({transactionHistory.length})</button>
      </div>
      <p className={styles.description}>Sistema inteligente de *matching* para trocas de turnos.</p>
      
      {/* ----------------- 1. OFERTAS ATIVAS ----------------- */}
      <h4 className={styles.sectionTitle}>Ofertas Ativas</h4>
      <div className={styles.offerList}>
        {activeOffers.map(offer => (
          <div key={offer.id} className={styles.offerItem}>
            <span className={styles.offerText}>{offer.description}</span>
          </div>
        ))}
      </div>

      {/* ----------------- 2. MATCHING SUGERIDO ----------------- */}
      <h4 className={styles.sectionTitle}><FaRobot className={styles.icon} /> Matches Sugeridos ({suggestedMatches.length})</h4>
      <div className={styles.matchList}>
        {suggestedMatches.map(match => (
          <div key={match.id} className={styles.matchItem}>
            <div className={styles.matchDetails}>
              <span className={styles.matchOffer}>{match.offer}</span>
              <span className={styles.matchSuggestion}>
                Compatível com: **{match.match}**
              </span>
            </div>
            <div className={styles.matchActions}>
              <span className={styles.matchScore}>{match.score}</span>
              <button 
                className={`${styles.actionButton} ${styles.approveButton}`}
                onClick={() => handleAction(match.id, 'Aprovar')}
                title="Aprovar Match"
              >
                <FaCheck />
              </button>
              <button 
                className={`${styles.actionButton} ${styles.rejectButton}`}
                onClick={() => handleAction(match.id, 'Recusar')}
                title="Recusar Proposta"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ----------------- 3. HISTÓRICO DE TRANSAÇÕES ----------------- */}
      <h4 className={styles.sectionTitle}>Histórico Recente</h4>
      <div className={styles.historyList}>
        {transactionHistory.map(item => (
          <div key={item.id} className={styles.historyItem}>
            <span className={styles.historyDate}>{item.date}</span>
            <span className={styles.historyAction}>{item.action}</span>
            <span className={`${styles.historyStatus} ${item.status === 'Aprovada' ? styles.statusApproved : styles.statusCompleted}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourMarketplace;