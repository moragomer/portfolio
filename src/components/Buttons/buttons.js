"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const colors_1 = __importDefault(require("../styles/colors"));
const buttonSize_1 = __importDefault(require("../sizes/buttonSize"));
const textSize_1 = __importDefault(require("../sizes/textSize"));
const buttonVariant = {
    primary: {
        backgroundColor: colors_1.default.action,
        hover: {
            backgroundColor: colors_1.default.darkAction,
            color: colors_1.default.white,
        },
        disabled: {
            backgroundColor: colors_1.default.grey,
            color: colors_1.default.darkGrey,
        },
        color: colors_1.default.white,
        borderColor: colors_1.default.action,
        fontSize: textSize_1.default.sm,
    },
    secondary: {
        backgroundColor: colors_1.default.white,
        color: colors_1.default.action,
        borderColor: colors_1.default.action,
        fontSize: textSize_1.default.sm,
        hover: {
            backgroundColor: colors_1.default.action,
            color: colors_1.default.white,
        },
    },
    tertiary: {
        backgroundColor: colors_1.default.white,
        hover: {
            backgroundColor: colors_1.default.lightGrey,
            color: colors_1.default.action,
        },
        color: colors_1.default.action,
        borderColor: colors_1.default.white,
        fontSize: textSize_1.default.sm,
    },
};
exports.Button = styled_components_1.default.button `
font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 8px;
  border: 1px solid;
  font-weight: 500;
  ${(props) => {
    var _a, _b, _c, _d, _e;
    return ((_a = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _a === void 0 ? void 0 : _a.hover) &&
        (0, styled_components_1.css) `
      &:hover {
        background-color: ${(_c = (_b = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _b === void 0 ? void 0 : _b.hover) === null || _c === void 0 ? void 0 : _c.backgroundColor};
        color: ${(_e = (_d = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _d === void 0 ? void 0 : _d.hover) === null || _e === void 0 ? void 0 : _e.color};
      }
    `;
}}
  ${(props) => {
    var _a, _b, _c, _d, _e;
    return ((_a = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _a === void 0 ? void 0 : _a.disabled) &&
        (0, styled_components_1.css) `
      &:disabled {
        background-color: ${(_c = (_b = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _b === void 0 ? void 0 : _b.disabled) === null || _c === void 0 ? void 0 : _c.backgroundColor};
        color: ${(_e = (_d = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _d === void 0 ? void 0 : _d.disabled) === null || _e === void 0 ? void 0 : _e.color};
      }
    `;
}}
  background-color: ${(props) => { var _a; return (_a = buttonVariant[props.variant || "primary"]) === null || _a === void 0 ? void 0 : _a.backgroundColor; }};
  color: ${(props) => { var _a; return (_a = buttonVariant[props.variant || "primary"]) === null || _a === void 0 ? void 0 : _a.color; }};
  border-color: ${(props) => { var _a; return (_a = buttonVariant[props.variant || "primary"]) === null || _a === void 0 ? void 0 : _a.borderColor; }};
  font-size: ${(props) => { var _a; return (_a = buttonVariant[props.variant || "primary"]) === null || _a === void 0 ? void 0 : _a.fontSize; }};
  padding: ${(props) => buttonSize_1.default[props.buttonSize || "lg"]};
`;
