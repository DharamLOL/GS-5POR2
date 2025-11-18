jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './ChartCard.module.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartCard = () => {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: "Pauline's Wellness Score",
        data: [70, 75, 72, 80, 78, 85, 82, 90, 88, 92, 89, 95],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        tension: 0.1,
      },
      {
        label: "Bruno's Wellness Score",
        data: [65, 68, 72, 75, 78, 80, 82, 85, 83, 87, 90, 88],
        fill: false,
        backgroundColor: '#28a745',
        borderColor: '#28a745',
        tension: 0.1,
      },
      {
        label: "Dharm's Wellness Score",
        data: [80, 82, 78, 85, 83, 88, 90, 87, 92, 89, 85, 91],
        fill: false,
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
        tension: 0.1,
      },
      {
        label: "Fabiano's Wellness Score",
        data: [60, 65, 70, 68, 72, 75, 78, 80, 83, 85, 82, 87],
        fill: false,
        backgroundColor: '#ffc107',
        borderColor: '#ffc107',
        tension: 0.1,
      },
      {
        label: "Ana's Wellness Score",
        data: [75, 78, 80, 82, 85, 83, 87, 90, 88, 92, 95, 93],
        fill: false,
        backgroundColor: '#6f42c1',
        borderColor: '#6f42c1',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Evolução Mensal - Wellness Scores',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Wellness Score (0-100)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
    },
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Evolução Mensal - Wellness Scores</h3>
      <div className={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartCard;