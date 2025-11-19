import React from 'react';
import styles from './SuggestedActions.module.css'; // Usando o nome original do CSS
import { FaBolt, FaQuestionCircle } from 'react-icons/fa';

const SuggestedActions = () => {
  // Ações sugeridas pela IA, ligadas aos dados de performance e risco
  const actions = [
    {
      id: 1,
      priority: 'Urgente',
      action: 'Intervenção: Oferecer folga remunerada a Pauline.',
      impact: 'Alto',
      reason: 'Risco de Burnout (Score 8.2) e +12h extras projetadas.',
    },
    {
      id: 2,
      priority: 'Alta',
      action: 'Treinamento focado em "Fechamento" para Dharam.',
      impact: 'Alto',
      reason: 'Produtividade (Vendas/Hora) boa, mas Taxa de Conversão abaixo da média.',
    },
    {
      id: 3,
      priority: 'Média',
      action: 'Reavaliar a fila de Leads (Lead Queue) e redistribuir carga.',
      impact: 'Médio',
      reason: 'Volume de vendas da equipe abaixo da meta (-R$5K).',
    },
    {
      id: 4,
      priority: 'Média',
      action: 'Sessão de feedback 1:1 com Fabiano sobre uso do CRM.',
      impact: 'Baixo',
      reason: 'Baixa frequência de atualização no CRM (Risco de estabilidade).',
    },
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'Urgente':
        return styles.priorityUrgent;
      case 'Alta':
        return styles.priorityHigh;
      case 'Média':
        return styles.priorityMedium;
      case 'Baixa':
        return styles.priorityLow;
      default:
        return '';
    }
  };

  const getImpactClass = (impact) => {
    switch (impact) {
      case 'Alto':
        return styles.impactHigh;
      case 'Médio':
        return styles.impactMedium;
      case 'Baixo':
        return styles.impactLow;
      default:
        return '';
    }
  };

  const handleImplement = (action) => {
    alert(`Guia de implementação para: "${action.action}"`);
    // Aqui você adicionaria a lógica para abrir um modal ou link para o guia.
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}><FaBolt /> Ações Gerenciais Sugeridas</h3>
      <div className={styles.tableContainer}>
        <table className={styles.actionsTable}>
          <thead>
            <tr>
              <th>Ação</th>
              <th>Motivo (Dado)</th>
              <th>Prioridade</th>
              <th>Impacto Est.</th>
              <th className={styles.actionColumn}>Opções</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((item) => (
              <tr key={item.id}>
                <td>
                    <span className={styles.actionText}>{item.action}</span>
                    <span className={styles.reasonText}>{item.reason}</span>
                </td>
                <td>{item.reason}</td>
                <td><span className={`${styles.priorityTag} ${getPriorityClass(item.priority)}`}>{item.priority}</span></td>
                <td><span className={`${styles.impactTag} ${getImpactClass(item.impact)}`}>{item.impact}</span></td>
                <td className={styles.actionColumn}>
                    <button 
                        className={styles.implementButton}
                        onClick={() => handleImplement(item)}
                    >
                        <FaQuestionCircle /> Como Implementar
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuggestedActions;