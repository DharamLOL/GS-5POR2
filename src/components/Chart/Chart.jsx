import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './Chart.module.css';

const data = [
  { name: 'Jan', '2020': 40, '2021': 24, '2022': 48 },
  { name: 'Fev', '2020': 30, '2021': 13, '2022': 38 },
  { name: 'Mar', '2020': 60, '2021': 58, '2022': 68 },
  { name: 'Abr', '2020': 80, '2021': 39, '2022': 49 },
  { name: 'Mai', '2020': 50, '2021': 48, '2022': 70 },
  { name: 'Jun', '2020': 60, '2021': 38, '2022': 40 },
  { name: 'Jul', '2020': 40, '2021': 43, '2022': 60 },
  { name: 'Ago', '2020': 70, '2021': 30, '2022': 50 },
  { name: 'Set', '2020': 50, '2021': 28, '2022': 30 },
  { name: 'Out', '2020': 70, '2021': 60, '2022': 65 },
  { name: 'Nov', '2020': 80, '2021': 70, '2022': 75 },
  { name: 'Dez', '2020': 75, '2021': 80, '2022': 85 },
];

const Chart = ({ title }) => {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="2020" stroke="#8884d8" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2021" stroke="#82ca9d" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="2022" stroke="#ffc658" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;