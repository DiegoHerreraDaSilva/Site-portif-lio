export const profile = {
  name: 'Diego Herrera da Silva',
  role: 'Estagiário de Suporte de TI',
  location: 'São Bernardo do Campo, SP, Brasil',
  summary: `Sou estudante de Ciências da Computação e atuo como estagiário de Suporte de TI, buscando evoluir constantemente na área. Tenho experiência em identificação e solução de falhas, suporte técnico, desenvolvimento de softwares e automações com IA. Sou proativo, organizado, tenho facilidade para resolver problemas e absorver novos conhecimentos. Estou sempre em busca de aprimorar minhas habilidades e contribuir de forma eficiente para a equipe e para os usuários.`,
  email: 'diegoherrerasilva12@gmail.com',
  linkedin: 'https://linkedin.com/in/diegoherreradasilva',
  github: 'https://github.com/DiegoHerreraDaSilva',
};

export const education = [
  {
    institution: 'Centro Universitário Fundação Santo André',
    degree: 'Bacharelado em Ciência da Computação',
    period: 'jan/2024 – nov/2027',
  },
  {
    institution: 'YES! Escola de idiomas',
    degree: 'Inglês como Segundo Idioma',
    period: 'jul/2025 – jun/2026',
  },
];

export const experience = [
  {
    company: 'Schwaben Engineering',
    role: 'Estagiário de Suporte de TI',
    period: 'nov/2025 – Presente (9 meses)',
    location: 'Santo André, SP',
    highlights: [
      'Atualização e monitoramento no inventário, documentação e layout da empresa',
      'Atendimento de chamados e prestação de suporte em hardware e software',
      'Gerenciamento do Windows Server e Active Directory',
      'Instalação, configuração e atualização de softwares e sistemas',
      'Apoio em projetos de implantações tecnológicas, soluções e automações com IA e desenvolvimento de sistemas internos',
    ],
  },
  {
    company: 'Exército Brasileiro — Tiro de Guerra 02-078',
    role: 'Instruções e Treinamentos Militares',
    period: 'fev/2025 – nov/2025 (10 meses)',
    location: 'São Bernardo do Campo, SP',
    highlights: [
      'Disciplina, responsabilidade, comunicação eficaz e trabalho em equipe',
      'Atuação sob pressão e cumprimento de procedimentos com precisão',
      'Comprometimento, hierarquia, respeito, resiliência e adaptação',
    ],
  },
  {
    company: 'RR Printer',
    role: 'Técnico de Suporte de Informática',
    period: 'nov/2024 – mai/2025 (7 meses)',
    location: 'São Bernardo do Campo, SP',
    highlights: [
      'Manutenção de computadores e impressoras, identificação e reparo de falhas',
      'Formatação, instalação de sistemas, drivers e BIOS, substituição e configuração de peças',
      'Suporte técnico presencial e remoto',
    ],
  },
];

export const skills = [
  { category: 'Infraestrutura & Suporte', items: ['Governança de TI', 'Hardware', 'Software', 'Active Directory', 'Windows Server', 'Redes', 'Suporte técnico'] },
  { category: 'Desenvolvimento', items: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Python', 'HTML/CSS/JavaScript', 'SQL/MySQL'] },
  { category: 'Automação & Integração', items: ['Power Automate', 'APIs de IA', 'Microsoft SharePoint/Graph API', 'Excel'] },
];

export const languages = [
  { language: 'Português', level: 'Nativo' },
  { language: 'Inglês', level: 'Full Professional' },
  { language: 'Espanhol', level: 'Elementary' },
];

export const certifications = [
  { name: 'Excel Básico', image: '/Excel.jpg' },
  { name: 'SQL, MySQL e Banco de Dados', image: '/SQL.jpg' },
  { name: 'Site simples usando HTML, CSS e JavaScript', image: '/Sitesimples.jpg' },
  { name: 'Estrutura de Dados', image: '/Estrutura.jpg' },
];

export interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    title: 'Integração IA + Inventário de TI',
    description: 'Integração do Claude com inventário de equipamentos de TI via servidor MCP (conector) que aciona script Python fazendo requisições HTTP à Graph API da Azure conectada a uma SharePoint List — permitindo CRUD via IA. Inclui dashboard com KPIs, cards e gráficos.',
    stack: ['Python', 'Claude AI', 'Azure Graph API', 'SharePoint', 'MCP'],
  },
  {
    title: 'Automação de Tickets de TI',
    description: 'Automação no Power Automate: ao enviar `!ticket (descrição)` no chat do técnico, o fluxo captura a mensagem e envia à API da Anthropic para classificar gravidade, categoria e gerar descrição, criando o ticket automaticamente no Spiceworks.',
    stack: ['Power Automate', 'Anthropic API', 'Spiceworks'],
  },
  {
    title: 'Gerador de ATAs Automático',
    description: 'Automação ponta a ponta. Copilot transcreve reunião do Teams, transcrição registrada em SharePoint List, Power Automate envia para API do Claude que gera a ATA completa. Aprovada via Teams = publicada; reprovada = retorna ao Claude com observações para correção.',
    stack: ['Power Automate', 'Claude API', 'SharePoint', 'Microsoft Teams', 'Copilot'],
  },
  {
    title: 'Cardápio Digital',
    description: 'Cardápio digital para cadastro e visualização de produtos com autenticação e banco de dados relacional.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    github: 'https://github.com/DiegoHerreraDaSilva/Cardapio',
  },
  {
    title: 'Landing Page Psi',
    description: 'Landing page profissional para psicóloga (cliente Carla), com design clean e informações de serviços.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/DiegoHerreraDaSilva/landingPagePsi',
  },
  {
    title: 'Linktree Personalizado',
    description: 'Aplicação para criar árvore de links personalizada com categorias e compartilhamento.',
    stack: ['TypeScript'],
    github: 'https://github.com/DiegoHerreraDaSilva/Linktree',
  },
  {
    title: 'PrimeFlix',
    description: 'Aplicação que lista filmes em cartaz e seus detalhes, consumindo API de filmes.',
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/DiegoHerreraDaSilva/PrimeFlix',
  },
  {
    title: 'Criptomoedas',
    description: 'Lista de criptomoedas com informações atualizadas consumindo API pública.',
    stack: ['TypeScript'],
    github: 'https://github.com/DiegoHerreraDaSilva/Criptomoedas',
  },
  {
    title: 'Email AI App',
    description: 'Aplicação integrada com IA para ler e classificar e-mails automaticamente.',
    stack: ['Python'],
    github: 'https://github.com/DiegoHerreraDaSilva/Email-AI-App',
  },
];
