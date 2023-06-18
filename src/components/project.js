"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const colors_1 = __importDefault(require("./styles/colors"));
require("/Users/Omer.m/Downloads/My Documents/projects-code/code-learning/learn-react/src/style.css");
const input_1 = require("./input");
const typography_1 = require("./styles/typography");
const spacing_1 = __importDefault(require("./styles/spacing"));
const react_router_dom_1 = require("react-router-dom");
function ProjectCard({ projectData }) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.Link, { to: projectData.link, style: { textDecoration: "none" } },
            react_1.default.createElement(input_1.Flex, { gap: spacing_1.default.lg, className: "project", style: { borderRadius: 16 } },
                react_1.default.createElement(typography_1.H2, null, projectData.icon),
                react_1.default.createElement(input_1.Flex, { flexDirection: "column", gap: spacing_1.default.s, alignItems: "start" },
                    " ",
                    react_1.default.createElement(typography_1.H4, null, projectData.name),
                    react_1.default.createElement(typography_1.P, { style: { color: colors_1.default.grey } }, projectData.date))))));
}
exports.default = ProjectCard;
