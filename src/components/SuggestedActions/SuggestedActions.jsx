import React from 'react';
import styles from './SuggestedActions.module.css';

const SuggestedActions = () => {
  const actions = [
    {
      id: 1,
      priority: 'Alta',
      action: 'Implementar horário flexível para melhorar equilíbrio vida-trabalho',
      impact: 'Alto',
      deadline: '2025-02-15',
    },
    {
      id: 2,
      priority: 'Média',
      action: 'Organizar sessões de treinamento cruzado entre equipes',
      impact: 'Médio',
      deadline: '2025-03-01',
    },
    // Adicione mais ações conforme necessário
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
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

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Ações Sugeridas pela IA</h3>
      <div className={styles.tableContainer}>
        <table className={styles.actionsTable}>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Action</th>
              <th>Impact</th>
              <th>Deadline</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((item) => (
              <tr key={item.id}>
                <td><span className={`${styles.priorityTag} ${getPriorityClass(item.priority)}`}>{item.priority}</span></td>
                <td>{item.action}</td>
                <td><span className={`${styles.impactTag} ${getImpactClass(item.impact)}`}>{item.impact}</span></td>
                <td>{item.deadline}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuggestedActions;