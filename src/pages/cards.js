"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
const react_1 = __importDefault(require("react"));
const input_1 = require("../components/input");
const spacing_1 = __importDefault(require("../components/styles/spacing"));
const data_1 = require("../components/data");
const card_1 = __importDefault(require("../components/card"));
const Cards = () => {
    return (react_1.default.createElement("div", null,
        " ",
        react_1.default.createElement(input_1.Flex, { gap: spacing_1.default.lg, flexWrap: "wrap", justifyContent: "center" }, data_1.cardsData.map((item, index) => {
            return react_1.default.createElement(card_1.default, { cardsData: item });
        }))));
};
exports.Cards = Cards;
