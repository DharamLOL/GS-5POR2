import React from 'react';
import styles from './UpcomingSchedules.module.css';

const UpcomingSchedules = () => {
    // Lista de nomes fornecida
    const people = ['Pauline', 'Bruno', 'Dharam', 'Ana Luisa', 'Fabiano'];
    
    // Lista de status e funções para gerar aleatoriedade
    const statuses = ['Confirmado', 'Pendente', 'Cancelado', 'Troca Solicitada', 'Em Análise'];
    const roles = ['Operador', 'Suporte', 'Supervisor', 'Noturno'];
    
    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    // Data de hoje: 18/11/2025 (Terça-feira)
    const TODAY = new Date('2025-11-18T00:00:00'); 

    // --- Lógica para Gerar Agendamentos dos Próximos Dias ---
    const generateUpcomingSchedules = (count) => {
        const generatedSchedules = [];
        const baseTime = 14; // Hora de início padrão

        for (let i = 0; i < count; i++) {
            const date = new Date(TODAY);
            date.setDate(TODAY.getDate() + i); // Pega a data atual + i dias
            
            // Formata a data como dd/mm/yyyy
            const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
            
            // Simulação de 1 a 2 turnos por dia
            const numShifts = Math.random() < 0.6 ? 1 : 2; 

            for (let j = 0; j < numShifts; j++) {
                const assignedPerson = getRandomItem(people);
                const assignedRole = getRandomItem(roles);
                const assignedStatus = getRandomItem(statuses);

                // Lógica de tempo simples baseada no índice do loop
                const startTime = baseTime + (j * 4) + (i % 3);
                const endTime = startTime + 4;
                const timeSlot = `${String(startTime).padStart(2, '0')}:00 - ${String(endTime).padStart(2, '0')}:00`;
                
                generatedSchedules.push({
                    name: assignedPerson,
                    status: assignedStatus,
                    role: assignedRole,
                    time: timeSlot,
                    date: formattedDate,
                });
            }
        }
        return generatedSchedules;
    };

    // Gera os agendamentos para os próximos 5 dias
    const schedules = generateUpcomingSchedules(5);

    const getStatusClass = (status) => {
        switch (status) {
            case 'Confirmado': return styles.statusConfirmed;
            case 'Pendente': return styles.statusPending;
            case 'Cancelado': return styles.statusCanceled; // Novo estilo
            case 'Troca Solicitada': return styles.statusSwapRequested; // Novo estilo
            case 'Em Análise': return styles.statusInAnalysis; // Novo estilo
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