import colors from "./styles/colors";

export interface CardData {
  title: string;
  label: string;
  projectName: string;
  cardColor: string;
}

export const cardsData: CardData[] = [
  {
    title: "Product Designer",
    label: "Project",
    projectName: "Storybook redesign",
    cardColor: colors.action,
  },
  {
    title: "Product Manager",
    label: "Position",
    projectName: "New Talent Marketplace",
    cardColor: colors.yellow,
  },
  {
    title: "Product Designer",
    label: "Project",
    projectName: "New Talent Marketplace",
    cardColor: colors.yellow,
  },
  {
    title: "Product Designer",
    label: "Project",
    projectName: "New Talent Marketplace",
    cardColor: colors.yellow,
  },
];

export const projectData = [
  {
    icon: "🏪",
    name: "Shopping list",
    date: "April 2023",
    link: `../list`,
  },
  {
    icon: "🃏",
    name: "Cards",
    date: "May 2023",
    link: "../cards",
  },
  {
    icon: "🗝️",
    name: "Login",
    date: "May 2023",
    link: "../login",
  },
  {
    icon: "🧮",
    name: "Calculator",
    date: "May 2023",
    link: "../calc",
  },
  {
    icon: "📊",
    name: "Charts",
    date: "May 2023",
    link: "../charts",
  },
  {
    icon: "✨",
    name: "API",
    date: "May 2023",
    link: "../api",
  },
];
export const userData = [
  {
    name: "omerm",
    password: "helloworld",
  },
];

export const chartData = [
  {
    name: "Jan",
    uv: 259,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 412,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "March",
    uv: 442,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Apr",
    uv: 122,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "May",
    uv: 344,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jun",
    uv: 253,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jul",
    uv: 235,
    pv: 2400,
    amt: 2400,
  },
];
