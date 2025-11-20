import React from 'react';
import styles from './Analytics.module.css';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertTriangle, Users, Heart } from 'lucide-react';
import Sidebar from '../../components/Sidebar/Sidebar';

const dataSazonalidade = [
  { name: 'Sem 1', valor: 40 },
  { name: 'Sem 2', valor: 30 },
  { name: 'Sem 3', valor: 20 },
  { name: 'Sem 4', valor: 60 },
  { name: 'Sem 5', valor: 45 },
  { name: 'Sem 6', valor: 90 },
  { name: 'Sem 7', valor: 90 },
];

export default function Analytics() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>

      <main className={styles.mainContent}>
        
        <div className={styles.header}>
          <h1>Painel de Insights IA</h1>
          <div className={styles.headerHighlight}>
              <span>Módulo 5: Analytics Preditivos</span>
          </div>
        </div>

        
        <div className={styles.topGrid}>
          <div className={styles.card}>
            <h2>Previsão de conflitos</h2>
            <div className={styles.conflictBars}>
              
              <div className={styles.barGroup}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{width: '35%', background: '#f87171'}}></div>
                </div>
                <span className={styles.barLabel}>Próximas 2 semanas</span>
              </div>

              <div className={styles.barGroup}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{width: '65%', background: '#fb923c'}}></div>
                </div>
                <span className={styles.barLabel}>Próxima semana</span>
              </div>

              <div className={styles.barGroup}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{width: '85%', background: '#6366f1'}}></div>
                </div>
                <span className={styles.barLabel}>Próximos 5 dias</span>
              </div>
              
               <div className={styles.barGroup}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{width: '15%', background: '#facc15'}}></div>
                </div>
                <span className={styles.barLabel}>Próximo mês</span>
              </div>

            </div>
          </div>

          
          <div className={styles.card}>
            <h2>Sazonalidade Inteligente</h2>
            <div className={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dataSazonalidade}>
                  <defs>
                    <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" hide />
                  <Tooltip />
                  <Area type="monotone" dataKey="valor" stroke="#8884d8" fillOpacity={1} fill="url(#colorValor)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        
        <h3 className={styles.sectionTitle}>Relatório de Sustentabilidade 5x2</h3>
        <div className={styles.bottomGrid}>
          
          <div className={styles.metricCard}>
              <div className={styles.metricHeader}>
                  <Heart size={20} color="#ec4899"/>
                  <span>Burnout Potential</span>
              </div>
              <div className={styles.bigNumber}>Baixo</div>
              <p className={styles.subText}>2 alertas em 50 funcs.</p>
          </div>

          <div className={styles.metricCard}>
              <div className={styles.metricHeader}>
                  <TrendingUp size={20} color="#10b981"/>
                  <span>Adesão ao 5x2</span>
              </div>
              <div className={styles.bigNumber}>87%</div>
              <p className={styles.subText}>+12% vs mês anterior</p>
          </div>

          <div className={styles.metricCard}>
              <div className={styles.metricHeader}>
                  <Users size={20} color="#3b82f6"/>
                  <span>Impacto Turnover</span>
              </div>
              <div className={styles.bigNumber}>-15%</div>
              <p className={styles.subText}>Economia projetada</p>
          </div>

           <div className={styles.metricCard}>
              <div className={styles.metricHeader}>
                  <AlertTriangle size={20} color="#f59e0b"/>
                  <span>Sugestão de Férias</span>
              </div>
              <div className={styles.listSmall}>
                  <li>Fabiano (Vence em 30d)</li>
                  <li>Ana Luiza (Pico de stress)</li>
              </div>
          </div>

        </div>
      
      </main> 
    </div> 
  );
}