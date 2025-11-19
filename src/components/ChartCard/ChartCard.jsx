import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './ChartCard.module.css';
import { FaChartLine, FaHeartbeat, FaPaperPlane, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend
);

const ChartCard = () => {
  
  // 1. Dados do Gráfico: Evolução Mensal do Wellness Score (0-100)
  const data = {
    labels: ['Ago', 'Set', 'Out', 'Nov', 'Dez (Proj.)'],
    datasets: [
      {
        label: "Pauline (Risco)",
        data: [80, 75, 70, 68, 85], // Queda devido à carga, Projeção de Recuperação (85)
        fill: false,
        backgroundColor: '#dc3545', // Vermelho para risco
        borderColor: '#dc3545',
        tension: 0.4,
      },
      {
        label: "Ana Luisa (Estável)",
        data: [92, 95, 93, 94, 95], 
        fill: false,
        backgroundColor: '#28a745',
        borderColor: '#28a745',
        tension: 0.4,
      },
      {
        label: "Média da Equipe",
        data: [85, 84, 82, 80, 88],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Evolução Mensal do Wellness Score (0-100)',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        max: 100,
        title: { display: true, text: 'Wellness Score' },
      },
      x: { title: { display: true, text: 'Mês' } },
    },
    interaction: { mode: 'index', intersect: false },
  };

  // 2. Ações Sugeridas (AGORA BEM-ESTAR)
  const aiSuggestions = [
    {
      person: "Pauline",
      suggestion: "Agendamento de folga (day-off) forçada para lidar com o alto risco de estresse.",
      priority: "Urgente",
      id: 1,
      reason: "Score de 68 pts (baixo) e +12h extras projetadas."
    },
    {
      person: "Dharam", 
      suggestion: "Sugerir participação no programa de ginástica laboral e pausas ativas.",
      priority: "Alta",
      id: 2,
      reason: "Baixa atividade física e score de Bem-Estar em queda (75 pts)."
    },
    {
      person: "Bruno",
      suggestion: "Incentivar o uso imediato dos dias de folga acumulados no banco de horas.",
      priority: "Média",
      id: 3,
      reason: "Acúmulo de 3 dias de folga não utilizados; risco de saturação."
    },
    {
        person: "Fabiano",
        suggestion: "Oferecer módulo de gestão de tempo e técnicas de relaxamento.",
        priority: "Média",
        id: 4,
        reason: "Score Mental em 70 pts e baixa produtividade por hora."
    },
    {
        person: "Ana Luisa",
        suggestion: "Sugerir um almoço de 1h fora do escritório para melhoria da socialização.",
        priority: "Baixa",
        id: 5,
        reason: "Score Social (10%) baixo, apesar da performance e bem-estar geral altos (94 pts)."
    },
  ];

  // 3. Comparativo de Impacto (Atual vs. Projeção Pós-Ação)
  const impactProjection = [
    { person: 'Pauline', current: '8.2 (Alto)', projected: '4.5 (Médio)', metric: 'Risco de Burnout', improvement: 'Redução de 3.7' },
    { person: 'Dharam', current: '5.5 (Médio)', projected: '4.0 (Baixo)', metric: 'Risco de Estresse', improvement: 'Redução de 1.5' },
    { person: 'Fabiano', current: '70%', projected: '85%', metric: 'Score Mental', improvement: 'Aumento de 15%' },
  ];

  const handleSendSuggestion = (person) => {
    alert(`Sugestão de Bem-Estar enviada para ${person}. O colaborador será notificado e terá a opção de aceitar/confirmar a ação.`);
  };
  
  const getPriorityColor = (priority) => {
    switch (priority) {
        case 'Urgente': return '#dc3545';
        case 'Alta': return '#ffc107';
        case 'Média': return '#007bff';
        default: return '#6c757d';
    }
  };


  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}><FaHeartbeat className={styles.icon} /> Análise de Tendência de Bem-Estar</h3>
      
      {/* 1. Gráfico Principal */}
      <div className={styles.chartSection}>
        <div className={styles.chartContainer}>
          <Line data={data} options={options} />
        </div>
      </div>

      {/* 2. Sugestões da IA com Botão de Ação */}
      <div className={styles.suggestionsSection}>
        <h4 className={styles.sectionTitle}>🎯 Ações de Bem-Estar (Por Prioridade)</h4>
        <div className={styles.suggestionsList}>
          {aiSuggestions.map((suggestion) => (
            <div 
              key={suggestion.id} 
              className={styles.suggestionItem}
              style={{ borderLeft: `5px solid ${getPriorityColor(suggestion.priority)}` }}
            >
              <div className={styles.suggestionContent}>
                <span className={styles.personName}>{suggestion.person}</span>
                <p className={styles.suggestionText}>
                    {suggestion.suggestion} 
                    <span className={styles.reasonText}> ({suggestion.reason})</span>
                </p>
              </div>
              <button 
                className={styles.sendButton}
                onClick={() => handleSendSuggestion(suggestion.person)}
              >
                <FaPaperPlane /> Enviar Sugestão
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Comparativo de Impacto (Projeção de Risco) */}
      <div className={styles.breakdownSection}>
        <h4 className={styles.sectionTitle}>📈 Projeção de Impacto (Redução de Risco Pós-Ação)</h4>
        <table className={styles.impactTable}>
          <thead>
            <tr>
              <th>Colaborador</th>
              <th>Métrica Chave</th>
              <th>Valor Atual</th>
              <th>Projeção Futura</th>
              <th>Melhoria Est.</th>
            </tr>
          </thead>
          <tbody>
            {impactProjection.map((item, index) => (
              <tr key={index}>
                <td className={styles.personName}>{item.person}</td>
                <td className={styles.metricName}>{item.metric}</td>
                <td>{item.current}</td>
                <td>{item.projected}</td>
                <td className={`${styles.improvementCell} ${item.metric.includes('Risco') ? styles.riskReduction : styles.improvement}`}>
                  {item.metric.includes('Risco') ? <FaArrowDown className={styles.improvementIcon} /> : <FaArrowUp className={styles.improvementIcon} />}
                   {item.improvement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.tip}>
          *Projeção baseada na simulação de recuperação de foco e redução de estresse após a intervenção sugerida.
        </p>
      </div>
    </div>
  );
};

export default ChartCard;