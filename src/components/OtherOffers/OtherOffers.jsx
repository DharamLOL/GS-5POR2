import React from 'react';
import styles from './OtherOffers.module.css';

const OtherOffers = () => {
  const offers = [
    {
      id: 1,
      name: 'João Silva',
      role: 'Operador',
      time: '14:00 - 18:00',
      date: '15/01/2025',
      status: 'Novo',
    },
    {
      id: 2,
      name: 'Maria Souza',
      role: 'Suporte',
      time: '08:00 - 12:00',
      date: '16/01/2025',
      status: 'Novo',
    },
    {
        id: 3,
        name: 'Carlos Lima',
        role: 'Técnico',
        time: '10:00 - 16:00',
        date: '17/01/2025',
        status: 'Novo',
      },
  ];

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Outras Ofertas</h3>
      <div className={styles.offerList}>
        {offers.map(offer => (
          <div key={offer.id} className={styles.offerItem}>
            <div className={styles.offerDetails}>
              <span className={styles.offerName}>{offer.name}</span>
              <span className={styles.offerRole}>{offer.role}</span>
              <span className={styles.offerTime}>{offer.time} - {offer.date}</span>
            </div>
            <span className={styles.offerStatus}>{offer.status}</span>
            <button className={styles.viewButton}>Ver</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherOffers;