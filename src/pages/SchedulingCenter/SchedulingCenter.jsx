// src/pages/SchedulingCenter/SchedulingCenter.jsx
import React from 'react';
import styles from './SchedulingCenter.module.css';
import Sidebar from '../../components/Sidebar/Sidebar'; // Caminho existente
import Header from '../../components/Header/Header';    // Caminho existente
import ScheduleCalendar from '../../components/ScheduleCalendar/ScheduleCalendar';


import UpcomingSchedules from '../../components/UpcomingSchedules/UpcomingSchedules';
import HourMarketplace from '../../components/HourMarketplace/HourMarketplace';
import AIRecommendedMatches from '../../components/AIRecommendedMatches/AIRecommendedMatches';
import OtherOffers from '../../components/OtherOffers/OtherOffers';
import { FaFilter, FaPlus } from 'react-icons/fa';


const SchedulingCenter = () => {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header title="Central de escalas" />
        <div className={styles.pageHeader}>
            <div className={styles.filterSection}>
                <button className={styles.filterButton}><FaFilter /> Filtros</button>
            </div>
            <button className={styles.addButton}><FaPlus /> Adicionar escala</button>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.leftColumn}>
            <ScheduleCalendar />
            <HourMarketplace />
            <AIRecommendedMatches />
          </div>
          <div className={styles.rightColumn}>
            <UpcomingSchedules />
            <OtherOffers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingCenter;