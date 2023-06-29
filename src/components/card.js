"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const colors_1 = __importDefault(require("./styles/colors"));
const input_1 = require("./input");
const typography_1 = require("./styles/typography");
const spacing_1 = __importDefault(require("./styles/spacing"));
const buttons_1 = require("./Buttons/buttons");
const icons_material_1 = require("@mui/icons-material");
const TimerOutlined_1 = __importDefault(require("@mui/icons-material/TimerOutlined"));
const material_1 = require("@mui/material");
const FavoriteBorderOutlined_1 = __importDefault(require("@mui/icons-material/FavoriteBorderOutlined"));
const Share_1 = __importDefault(require("@mui/icons-material/Share"));
const card1_jpeg_1 = __importDefault(require("./img/card1.jpeg"));
const card2_jpeg_1 = __importDefault(require("./img/card2.jpeg"));
const card3_jpeg_1 = __importDefault(require("./img/card3.jpeg"));
const card4_jpeg_1 = __importDefault(require("./img/card4.jpeg"));
const card5_jpeg_1 = __importDefault(require("./img/card5.jpeg"));
const card6_jpeg_1 = __importDefault(require("./img/card6.jpeg"));
// Card color
const cardColor = {
    Project: {
        borderBottom: `8px solid ${colors_1.default.sky}`,
    },
    Position: {
        borderBottom: `8px solid ${colors_1.default.coral}`,
    },
};
//  Card cover
const imgs = [card1_jpeg_1.default, card2_jpeg_1.default, card3_jpeg_1.default, card4_jpeg_1.default, card5_jpeg_1.default, card6_jpeg_1.default];
function Card({ cardsData }) {
    var _a;
    return (react_1.default.createElement("div", { style: {
            backgroundColor: colors_1.default.white,
            maxWidth: 360,
            minWidth: 360,
            maxHeight: 470,
            height: 508,
            borderRadius: 16,
            border: "1px solid #E0E0E0",
            overflow: "hidden",
            marginRight: 0,
            position: "relative",
        } },
        react_1.default.createElement("div", { style: {
                borderBottom: (_a = cardColor[cardsData.label]) === null || _a === void 0 ? void 0 : _a.borderBottom,
                marginRight: "auto",
                maxWidth: 360,
                position: "relative",
                flex: 1,
                overflow: "hidden",
                height: 150,
            } },
            react_1.default.createElement("div", { style: {
                    backgroundColor: colors_1.default.white,
                    color: colors_1.default.darkGrey,
                    padding: "8px",
                    position: "absolute",
                    left: spacing_1.default.m,
                    top: spacing_1.default.m,
                    borderRadius: 4,
                } }, cardsData.label),
            react_1.default.createElement("img", { src: imgs[Math.floor(Math.random() * imgs.length)], width: "100%", style: {
                    borderRadius: "16px",
                    display: "block"
                } })),
        react_1.default.createElement("div", { style: { padding: spacing_1.default.s, flex: 2 } },
            react_1.default.createElement(input_1.Flex, { flexDirection: "column", alignItems: "flex-start", gap: spacing_1.default.m },
                react_1.default.createElement(typography_1.H3, null, cardsData.title),
                react_1.default.createElement(input_1.Flex, { gap: spacing_1.default.m, alignItems: "center" },
                    react_1.default.createElement(typography_1.Label, { style: { fontSize: 14 } }, cardsData.projectName),
                    react_1.default.createElement(input_1.Flex, { alignItems: "center", gap: spacing_1.default.xs },
                        react_1.default.createElement(TimerOutlined_1.default, { style: { fontSize: 20 } }),
                        react_1.default.createElement(typography_1.Label, { style: { fontSize: 14 } }, "X hours per week"))),
                react_1.default.createElement(input_1.Flex, { alignItems: "center", gap: spacing_1.default.m },
                    react_1.default.createElement(material_1.Avatar, null),
                    react_1.default.createElement(typography_1.H5, { color: colors_1.default.darkGrey }, "User name")),
                react_1.default.createElement(input_1.Flex, { alignItems: "center", gap: spacing_1.default.s },
                    react_1.default.createElement(icons_material_1.AutoAwesome, { style: { color: colors_1.default.yellow } }),
                    react_1.default.createElement(typography_1.P, null, "Gain skills important to your organization ")))),
        react_1.default.createElement("div", { style: {
                padding: spacing_1.default.s,
                position: "absolute",
                bottom: 0,
                right: 0,
                flex: 1,
                width: "100%",
                borderTop: "1px solid #E0E0E0",
            } },
            react_1.default.createElement(input_1.Flex, { gap: spacing_1.default.s, justifyContent: "space-between" },
                react_1.default.createElement(input_1.Flex, { gap: spacing_1.default.s },
                    " ",
                    react_1.default.createElement(buttons_1.Button, { variant: "tertiary", buttonSize: "sBlg" },
                        react_1.default.createElement(Share_1.default, null),
                        " "),
                    react_1.default.createElement(buttons_1.Button, { variant: "tertiary", buttonSize: "sBlg" },
                        react_1.default.createElement(FavoriteBorderOutlined_1.default, null))),
                react_1.default.createElement(input_1.Flex, { gap: spacing_1.default.s },
                    " ",
                    react_1.default.createElement(buttons_1.Button, { variant: "tertiary", buttonSize: "sBlg" },
                        react_1.default.createElement(icons_material_1.ThumbDown, null),
                        " "),
                    react_1.default.createElement(buttons_1.Button, { variant: "primary", buttonSize: "sBlg" },
                        react_1.default.createElement(icons_material_1.ThumbUp, null)))))));
}
exports.default = Card;
