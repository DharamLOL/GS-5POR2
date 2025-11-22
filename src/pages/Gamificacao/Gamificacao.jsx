import React from 'react';
import { FaStar, FaTrophy, FaStore } from 'react-icons/fa';

// Caminhos corretos para os componentes reutilizáveis
import SectionCard from '../../components/SectionCard/SectionCard';
import AchievementItem from '../../components/AchievementItem/AchievementItem';
import RewardItem from '../../components/RewardItem/RewardItem';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

// Caminho correto para os dados
import { userData, achievementsData, rewardsData } from '../../data/mockData.jsx';

import styles from './Gamificacao.module.css';

const Gamificacao = () => {
    const unlockedCount = achievementsData.filter(a => a.isUnlocked).length;
    const totalAchievements = achievementsData.length;

    return (
        <div className={styles.container}>
            
            {/* --- SEÇÃO 1: CABEÇALHO DO USUÁRIO --- */}
            <div className={styles.headerCard}>
                <div className={styles.headerTop}>
                    <div className={styles.profileSection}>
                        <div className={styles.avatar}>
                            {userData.name.charAt(0)}
                        </div>
                        <div>
                            <h2 className={styles.userName}>{userData.name}</h2>
                            <p className={styles.userRole}>{userData.role}</p>
                        </div>
                    </div>

                    <div className={styles.pointsSection}>
                        <div className={styles.pointsValue}>
                            <FaStar className={styles.starIcon} /> {userData.points}
                        </div>
                        <p className={styles.pointsLabel}>Pontos disponíveis</p>
                    </div>
                </div>

                <div className={styles.wellnessSection}>
                    <div className={styles.wellnessHeader}>
                        <span>Nível de Bem-Estar</span>
                        <span className={styles.wellnessPercent}>{userData.wellnessLevel}%</span>
                    </div>
                    <ProgressBar percentage={userData.wellnessLevel} showLabels={true} />
                </div>
            </div>

            {/* --- SEÇÃO 2: GRID DE CONTEÚDO --- */}
            <div className={styles.grid}>
                
                {/* Coluna Esquerda: Conquistas */}
                <div className={styles.leftColumn}>
                    <SectionCard 
                        title="Conquistas" 
                        subtitle={`${unlockedCount} de ${totalAchievements} desbloqueadas`}
                        icon={<FaTrophy />}
                    >
                        {achievementsData.map(achievement => (
                            <AchievementItem key={achievement.id} data={achievement} />
                        ))}
                    </SectionCard>
                </div>

                {/* Coluna Direita: Loja de Benefícios */}
                <div className={styles.rightColumn}>
                    <SectionCard 
                        title="Loja de Benefícios" 
                        subtitle="Resgate recompensas com seus pontos"
                        icon={<FaStore />}
                        isStore={true}
                    >
                        {rewardsData.map(reward => (
                            <RewardItem key={reward.id} data={reward} />
                        ))}
                    </SectionCard>
                </div>

            </div>
        </div>
    );
};

export default Gamificacao;