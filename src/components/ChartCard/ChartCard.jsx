
import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './ChartCard.module.css';
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
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: "Pauline",
        data: [70, 75, 72, 80, 78, 85, 82, 90, 88, 92, 89, 95],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        tension: 0.4,
      },
      {
        label: "Bruno",
        data: [65, 68, 72, 75, 78, 80, 82, 85, 83, 87, 90, 88],
        fill: false,
        backgroundColor: '#28a745',
        borderColor: '#28a745',
        tension: 0.4,
      },
      {
        label: "Dharm",
        data: [80, 82, 78, 85, 83, 88, 90, 87, 92, 89, 85, 91],
        fill: false,
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
        tension: 0.4,
      },
      {
        label: "Fabiano",
        data: [60, 65, 70, 68, 72, 75, 78, 80, 83, 85, 82, 87],
        fill: false,
        backgroundColor: '#ffc107',
        borderColor: '#ffc107',
        tension: 0.4,
      },
      {
        label: "Ana",
        data: [75, 78, 80, 82, 85, 83, 87, 90, 88, 92, 95, 93],
        fill: false,
        backgroundColor: '#6f42c1',
        borderColor: '#6f42c1',
        tension: 0.4,
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
          text: 'Mês',
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  // Ações sugeridas pela IA
  const aiSuggestions = [
    {
      person: "Pauline",
      suggestion: "Manter rotina de exercícios matinais - mostrou melhora de 15% no score",
      priority: "alta"
    },
    {
      person: "Bruno", 
      suggestion: "Implementar pausas ativas a cada 2 horas de trabalho - pode melhorar foco",
      priority: "média"
    },
    {
      person: "Dharm",
      suggestion: "Reduzir horas extras - queda de 7% no score em Novembro detectada",
      priority: "alta"
    },
    {
      person: "Fabiano",
      suggestion: "Iniciar programa de meditação - progressão constante mas pode acelerar",
      priority: "baixa"
    },
    {
      person: "Ana",
      suggestion: "Manter equilíbrio trabalho-vida pessoal - performance excelente",
      priority: "baixa"
    }
  ];

  // Fatores de breakdown
  const breakdownFactors = [
    { factor: "Sono", weight: "30%", description: "Qualidade e duração do descanso" },
    { factor: "Exercício", weight: "25%", description: "Atividade física regular" },
    { factor: "Nutrição", weight: "20%", description: "Alimentação balanceada" },
    { factor: "Mental", weight: "15%", description: "Saúde psicológica e estresse" },
    { factor: "Social", weight: "10%", description: "Relações e vida social" }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'alta': return '#dc3545';
      case 'média': return '#ffc107';
      case 'baixa': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Dashboard de Wellness - Análise Completa</h3>
      
      {/* Gráfico Principal */}
      <div className={styles.chartSection}>
        <h4 className={styles.sectionTitle}>Evolução Mensal - Wellness Scores</h4>
        <div className={styles.chartContainer}>
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Seção de Ações Sugeridas pela IA */}
      <div className={styles.suggestionsSection}>
        <h4 className={styles.sectionTitle}>🚀 Ações Sugeridas pela IA</h4>
        <div className={styles.suggestionsGrid}>
          {aiSuggestions.map((suggestion, index) => (
            <div 
              key={index} 
              className={styles.suggestionCard}
              style={{ borderLeft: `4px solid ${getPriorityColor(suggestion.priority)}` }}
            >
              <div className={styles.suggestionHeader}>
                <span className={styles.personName}>{suggestion.person}</span>
                <span 
                  className={styles.priorityBadge}
                  style={{ backgroundColor: getPriorityColor(suggestion.priority) }}
                >
                  {suggestion.priority}
                </span>
              </div>
              <p className={styles.suggestionText}>{suggestion.suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Breakdown por Fatores */}
      <div className={styles.breakdownSection}>
        <h4 className={styles.sectionTitle}>📊 Como Ler o Breakdown por Fatores</h4>
        <div className={styles.breakdownExplanation}>
          <p>
            O Wellness Score é composto por 5 fatores principais, cada um com um peso específico 
            na pontuação final. Entender essa composição ajuda a identificar áreas de melhoria:
          </p>
          
          <div className={styles.factorsGrid}>
            {breakdownFactors.map((factor, index) => (
              <div key={index} className={styles.factorItem}>
                <div className={styles.factorHeader}>
                  <span className={styles.factorName}>{factor.factor}</span>
                  <span className={styles.factorWeight}>{factor.weight}</span>
                </div>
                <p className={styles.factorDescription}>{factor.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.interpretationGuide}>
            <h5>🎯 Guia de Interpretação:</h5>
            <ul>
              <li><strong>Sono (30%):</strong> O fator mais impactante - priorize 7-9 horas de qualidade</li>
              <li><strong>Exercício (25%):</strong> Atividade regular melhora todos os outros aspectos</li>
              <li><strong>Nutrição (20%):</strong> Alimentação balanceada sustenta energia diária</li>
              <li><strong>Mental (15%):</strong> Gestão do estresse e saúde psicológica</li>
              <li><strong>Social (10%):</strong> Conexões saudáveis impactam bem-estar geral</li>
            </ul>
            <p className={styles.tip}>
              💡 <strong>Dica:</strong> Foque primeiro nos fatores com maior peso para maximizar 
              seu score geral. Pequenas melhorias no sono e exercício têm o maior impacto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;