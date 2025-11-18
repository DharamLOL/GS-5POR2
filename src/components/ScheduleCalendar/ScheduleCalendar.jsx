import React from 'react';
import styles from './ScheduleCalendar.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Ícones de navegação

const ScheduleCalendar = () => {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const dates = [
    '', '', '', '', 1, 2, 3, // Exemplo de datas
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, // Hoje
    16, 17, 18, 19, 20, 21, 22,
    23, 24, 25
  ]; // Datas simuladas para o layout

  return (
    <div className={styles.card}>
      <div className={styles.calendarHeader}>
        <div className={styles.leftControls}>
          <button className={styles.headerButton}>
            <FaChevronLeft />
          </button>
          <span className={styles.monthYear}>Novembro 2025</span>
          <button className={styles.headerButton}>
            <FaChevronRight />
          </button>
          <button className={styles.todayButton}>Hoje</button>
        </div>
        <div className={styles.rightControls}>
          <span className={styles.viewOption}>Mês</span>
          <span className={styles.viewOption}>Semana</span>
          <span className={styles.viewOption}>Dia</span>
        </div>
      </div>
      <div className={styles.calendarGrid}>
        {daysOfWeek.map(day => (
          <div key={day} className={styles.dayOfWeek}>{day}</div>
        ))}
        {dates.map((date, index) => (
          <div key={index} className={`${styles.dateCell} ${date === 15 ? styles.today : ''}`}>
            {date && <span className={styles.dateNumber}>{date}</span>}
            {date === 15 && (
              <div className={styles.scheduleItem}>
                <span className={styles.scheduleTime}>14:00 - 18:00</span>
                <span className={styles.scheduleName}>João</span>
              </div>
            )}
            {date === 16 && (
                <>
                <div className={styles.scheduleItem}>
                    <span className={styles.scheduleTime}>08:00 - 12:00</span>
                    <span className={styles.scheduleName}>Maria</span>
                </div>
                <div className={styles.scheduleItem}>
                    <span className={styles.scheduleTime}>14:00 - 16:00</span>
                    <span className={styles.scheduleName}>Pedro</span>
                </div>
                </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar;