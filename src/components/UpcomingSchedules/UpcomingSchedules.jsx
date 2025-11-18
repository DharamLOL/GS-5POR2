import React from 'react';
import styles from './UpcomingSchedules.module.css';

const UpcomingSchedules = () => {
  const schedules = [
    {
      name: 'João Silva',
      status: 'Confirmado',
      role: 'Operador',
      time: '14:00 - 18:00',
      date: '15/01/2025',
    },
    {
      name: 'Maria Santos',
      status: 'Pendente',
      role: 'Supervisor',
      time: '14:00 - 22:00',
      date: '15/01/2025',
    },
    {
      name: 'Pedro Costa',
      status: 'Conflito',
      role: 'Noturno - Operador',
      time: '22:00 - 06:00',
      date: '16/01/2025',
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Confirmado': return styles.statusConfirmed;
      case 'Pendente': return styles.statusPending;
      case 'Conflito': return styles.statusConflict;
      default: return '';
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Escalas Próximas</h3>
      <div className={styles.scheduleList}>
        {schedules.map((schedule, index) => (
          <div key={index} className={styles.scheduleItem}>
            <div className={styles.topRow}>
              <span className={styles.name}>{schedule.name}</span>
              <span className={`${styles.statusTag} ${getStatusClass(schedule.status)}`}>
                {schedule.status}
              </span>
            </div>
            <div className={styles.bottomRow}>
              <span className={styles.details}>{schedule.role}</span>
              <span className={styles.details}>{schedule.time}</span>
              <span className={styles.details}>{schedule.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedules;