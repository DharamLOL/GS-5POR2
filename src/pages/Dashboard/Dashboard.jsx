import React from 'react';
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Chart from '../../components/Chart/Chart';
import Notification from '../../components/Notification/Notification';
import Alert from '../../components/Alert/Alert';
import Sidebar from '../../components/Sidebar/Sidebar'; 

const Dashboard = () => {
  return (
    <div className={styles.pageContainer}>
      
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>

      <main className={styles.mainContent}>
          
          <Header userName="Fabiano" />

          <section className={styles.cardsSection}>
            <Card title="Próximos conflitos na escala" value={5} color="#dc3545" /> 
            <Card title="Wellness da loja" value={75} unit="%" color="#ffc107" /> 
            <Card title="Horas extras disponíveis" value={12} color="#17a2b8" /> 
          </section>

          <section className={styles.chartsGrid}>
            <div className={styles.chartArea}>
              <Chart title="Fluxo de funcionários" />
            </div>
            <aside className={styles.notificationsArea}>
              <h2 className={styles.sectionTitle}>Notificações</h2>
              <Notification icon="plus" text="Gerar nova escala 5X2" type="success" />
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

      </main>
    </div>
  );
};

export default Dashboard;