export interface Realisation {
  title: string;
  description: string;
  link?: string;
  stack: string[];
}

export const realisations: Realisation[] = [
  {
    title: "Portfolio",
    description: "Site web personnel",
    link: "https://github.com/ElvinFICHOTCORGERON/PortfolioElvin",
    stack: ["Vue.Js", "Tailwind", "Typescript"],
  },
  {
    title: "Site du Club Migennes Natation",
    description:
      "Je réalise actuellement un site vitrine pour le club de Migennes Natation en prévision de la prochaine saison.\n Il a pour but de présenter le club, les différentes activitées, les horaires ainsi que les tarifs",
    stack: ["Vue.Js", "Tailwind", "Typescript"],
  },
  {
    title: "S'aime",
    description:
      "S'aime est une application web développé dans le cadre de la SAE du Semestre 5 pour le back  de mon BUT informatique\n Elle a pour but de faire un suivi du principe de l'action Green Guerilla en représentant les terrains avec les plantations et leurs informations (produits à cultiver, allergies, état de pousse ...) ",
    stack: ["Vue.Js", "Tailwind", "Typescript", "Python", "Flask", "SQLite"],
  },
  {
    title: "La taverne des nains malins",
    description:
      "La taverne des nains malins est une application réalisé dans le cadre des presques 24h de l'iut de Dijon où nous avions 8h pour réaliser un site web pour une taverne avec une api donnée",
    stack: ["Laravel", "Tailwind", "PHP"],
  },
  {
    title: "Taskstep",
    description:
      "Taskstep est une application web déjà existante qu'il a fallu amélioré dans le cadre de la SAE du Semestre 4.\n Il a d'abord fallu faire un audit puis ensuite optimiser cette application suivant le résultat de l'audit ",
    stack: ["Laravel", "Tailwind", "PHP"],
  },
  {
    title: "Geo PicNic",
    description:
      "Geo PicNic est une application mobile développé dans le cadre de la SAE du Semestre 3.\n Elle a pour objectif de repertorier les lieux de pique-nique en France, de les noter ainsi que d'en ajouter de nouveaux",
    stack: ["C# .Net", "Xamarin", "XAML", "SQL", "Node", "Javascript"],
  },
];
