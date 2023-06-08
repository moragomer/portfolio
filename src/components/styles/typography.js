"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Crossed = exports.Pbold = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const colors_1 = __importDefault(require("./colors"));
const textSize_1 = __importDefault(require("../sizes/textSize"));
exports.H1 = styled_components_1.default.h1 `
  color: ${(props) => props.color || colors_1.default.darkestGrey};
  text-align: center;
  font-size: ${(props) => props.textSize || textSize_1.default.xxl};
  font-weight: 600;
  margin: 0;
  }
  
}
`;
exports.H2 = (0, styled_components_1.default)(exports.H1) `
  font-size: ${(props) => props.textSize || textSize_1.default.xl};
`;
exports.H3 = (0, styled_components_1.default)(exports.H1) `
  font-size: ${(props) => props.textSize || textSize_1.default.lg};
`;
exports.H4 = (0, styled_components_1.default)(exports.H1) `
  font-size: ${(props) => props.textSize || textSize_1.default.md};
`;
exports.H5 = (0, styled_components_1.default)(exports.H1) `
  font-size: ${(props) => props.textSize || textSize_1.default.sm};
`;
exports.H6 = (0, styled_components_1.default)(exports.H1) `
  font-size: ${(props) => props.textSize || textSize_1.default.xs};
`;
exports.P = styled_components_1.default.p `
  font-size: ${(props) => props.textSize || textSize_1.default.sm};
  color: ${(props) => props.color || colors_1.default.darkGrey};
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
exports.Pbold = (0, styled_components_1.default)(exports.P) `
  font-weight: 600;
  color: ${(props) => props.color || colors_1.default.darkGrey};
`;
exports.Crossed = (0, styled_components_1.default)(exports.P) `
  font-weight: 300;
  color: ${(props) => props.color || colors_1.default.grey};
  text-decoration: line-through;
`;
exports.Label = (0, styled_components_1.default)(exports.P) `
font-size=${textSize_1.default.xs};
color:${colors_1.default.darkGrey}
`;
