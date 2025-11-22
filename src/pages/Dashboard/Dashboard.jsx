import React from 'react';
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Chart from '../../components/Chart/Chart';
import Notification from '../../components/Notification/Notification';
import Alert from '../../components/Alert/Alert';
import Sidebar from '../../components/Sidebar/Sidebar'; // Caminho existente


const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header userName="Fabiano" />

      <section className={styles.cardsSection}>
        <Card title="Próximos conflitos na escala" value={5} color="#dc3545" /> {/* Red */}
        <Card title="Wellness da loja" value={75} unit="%" color="#ffc107" /> {/* Orange */}
        <Card title="Horas extras disponíveis" value={12} color="#17a2b8" /> {/* Teal */}
      </section>

      <section className={styles.mainContent}>
        <div className={styles.chartArea}>
          <Chart title="Fluxo de funcionários" />
        </div>
        <aside className={styles.notificationsArea}>
          <h2 className={styles.sectionTitle}>Notificações</h2>
          <Notification icon="plus" text="Nova escala criada com sucesso" type="success" />
          <Notification icon="exchange" text="Folgas alteradas" type="info" />
          <Notification icon="calendar" text="Nova análise disponível" type="warning" />
        </aside>
      </section>

      <section className={styles.alertsSection}>
        <h2 className={styles.sectionTitle}>Alertas</h2>
        <Alert message="Papéis ociosos detectados" type="pending" />
        <Alert message="Papéis ociosos detectados" type="info" />
        <Alert message="Papéis ociosos detectados" type="success" />
      </section>
    </div>
  );
};

export default Dashboard;