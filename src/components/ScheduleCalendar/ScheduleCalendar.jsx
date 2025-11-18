import React from 'react';
import styles from './ScheduleCalendar.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ScheduleCalendar = () => {
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    
    // Simulação de um mês de 30 dias (começando na Quarta-feira, índice 3)
    const totalDaysInMonth = 30;
    const firstDayIndex = 3; 
    
    const emptyCells = Array(firstDayIndex).fill('');
    const monthDates = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
    const dates = [...emptyCells, ...monthDates]; 

    // 🌟 LISTA DE PESSOAS ATUALIZADA 🌟
    const people = [
        'Pauline', 'Bruno', 'Dharam', 'Ana Luisa', 'Fabiano' 
    ];
    
    // --- Lógica de Escala Fictícia ---
    const generateSchedule = () => {
        const schedule = {};
        let daysPerPerson = {}; // Conta quantos dias cada pessoa trabalhou na semana
        people.forEach(p => daysPerPerson[p] = 0);
        
        let currentPersonIndex = 0;
        let dayIndexInWeek = firstDayIndex % 7; 

        dates.forEach((date) => {
            if (date === '') return; 

            // Reseta a contagem de dias no Domingo (índice 0)
            if (dayIndexInWeek === 0) { 
                people.forEach(p => daysPerPerson[p] = 0);
            }

            const workersToday = [];
            let attempts = 0;
            
            // Prioriza pessoas que trabalharam menos de 5 dias nesta semana
            let availablePeople = people.filter(p => daysPerPerson[p] < 5);
            
            // Tenta atribuir a próxima pessoa disponível
            while (workersToday.length < 1 && attempts < availablePeople.length * 2) {
                const person = availablePeople[currentPersonIndex % availablePeople.length];
                
                if (daysPerPerson[person] < 5) {
                    workersToday.push({ 
                        name: person, 
                        time: dayIndexInWeek < 5 ? '09:00 - 17:00' : '10:00 - 14:00' // Turnos diferentes para fds
                    });
                    daysPerPerson[person]++;
                }
                
                // Avança para a próxima pessoa da lista de disponíveis
                currentPersonIndex = (currentPersonIndex + 1); 
                attempts++;
            }
            
            if (workersToday.length > 0) {
                schedule[date] = workersToday;
            } else {
                 // Acontece nos dias em que todos já bateram 5 dias na semana
                 schedule[date] = [{ name: 'FOLGA GERAL', time: 'Sem Cobertura' }];
            }

            // Avança para o próximo dia da semana
            dayIndexInWeek = (dayIndexInWeek + 1) % 7;
        });

        return schedule;
    };

    const monthlySchedule = generateSchedule();

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

                {dates.map((date, index) => {
                    const dailySchedule = monthlySchedule[date] || [];
                    
                    return (
                        <div key={index} className={`${styles.dateCell} ${date === 18 ? styles.today : ''}`}>
                            {date && <span className={styles.dateNumber}>{date}</span>}
                            
                            {dailySchedule.map((item, itemIndex) => (
                                <div key={itemIndex} className={styles.scheduleItem}>
                                    <span className={styles.scheduleTime}>{item.time}</span>
                                    <span className={styles.scheduleName}>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ScheduleCalendar;