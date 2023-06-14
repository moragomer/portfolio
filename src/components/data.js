"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartData = exports.userData = exports.projectData = exports.cardsData = void 0;
const colors_1 = __importDefault(require("./styles/colors"));
exports.cardsData = [
    {
        title: "Product Designer",
        label: "Project",
        projectName: "Storybook redesign",
        cardColor: colors_1.default.action,
    },
    {
        title: "Product Manager",
        label: "Position",
        projectName: "New Talent Marketplace",
        cardColor: colors_1.default.yellow,
    },
    {
        title: "Product Designer",
        label: "Project",
        projectName: "New Talent Marketplace",
        cardColor: colors_1.default.yellow,
    },
    {
        title: "Product Designer",
        label: "Project",
        projectName: "New Talent Marketplace",
        cardColor: colors_1.default.yellow,
    },
];
exports.projectData = [
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
exports.userData = [
    {
        name: "omerm",
        password: "helloworld",
    },
];
exports.chartData = [
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
