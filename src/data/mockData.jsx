// src/data/mockData.jsx
import { FaBalanceScale, FaLightbulb, FaStar, FaUmbrellaBeach, FaExchangeAlt, FaClock, FaUtensils, FaLaptopHouse, FaBolt, FaTrophy, FaGift, FaLock } from 'react-icons/fa'; 
import { FaRegCircleDot } from 'react-icons/fa6'; 

const FaTarget = FaRegCircleDot; 

export const userData = {
  name: "Fabiano",
  role: "Operador de Produção",
  points: 450,
  wellnessLevel: 65,
};

export const achievementsData = [
  {
    id: 1,
    title: "Equilíbrio Dourado",
    description: "Manteve escala 5x1 por 3 meses consecutivos",
    points: 100,
    isUnlocked: true,
    icon: <FaBalanceScale />, 
  },
  {
    id: 2,
    title: "Multitalento",
    description: "Rodízio em 5 funções diferentes",
    points: 150,
    isUnlocked: true,
    icon: <FaTarget />, 
  },
  {
    id: 3,
    title: "Previsor Sábio",
    description: "Planejou férias com 3 meses de antecedência",
    points: 200,
    isUnlocked: false,
    progress: { current: 2, total: 3 },
    icon: <FaLightbulb />, 
  },
  {
    id: 4,
    title: "Colaborador Nota 10",
    description: "Completou 50 trocas de turno bem-sucedidas",
    points: 250,
    isUnlocked: false,
    progress: { current: 32, total: 50 },
    icon: <FaStar />, 
  },
];

export const rewardsData = [
  {
    id: 1,
    title: "Folga Extra",
    description: "1 dia de folga adicional",
    cost: 500,
    available: false, 
    icon: <FaUmbrellaBeach />, 
  },
  {
    id: 2,
    title: "Troca Prioritária",
    description: "Prioridade em trocas de turno por 1 mês",
    cost: 300,
    available: true,
    icon: <FaBolt />, 
  },
  {
    id: 3,
    title: "Escolha de Turno",
    description: "Escolha preferencial de turno por 1 semana",
    cost: 200,
    available: true,
    icon: <FaGift />, // Ícone de Presente
  },
  {
    id: 4,
    title: "Vale Alimentação",
    description: "R$ 50 em vale-refeição",
    cost: 400,
    available: true,
    icon: <FaUtensils />,
  },
   {
    id: 5,
    title: "Home Office",
    description: "1 dia de trabalho remoto",
    cost: 350,
    available: false, 
    icon: <FaLaptopHouse />,
  },
];