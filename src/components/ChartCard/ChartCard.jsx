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
        label: "Pauline's Wellness Score - Last 12 Months",
        data: [70, 75, 72, 80, 78, 85, 82, 90, 88, 92, 89, 95], // Dados de exemplo
        fill: true,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
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
        text: 'Evolução Mensal',
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
      <h3 className={styles.cardTitle}>Evolução Mensal</h3>
      <div className={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartCard;