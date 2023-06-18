"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const react_1 = __importDefault(require("react"));
const buttons_1 = require("./Buttons/buttons");
const material_1 = require("@mui/material");
const spacing_1 = __importDefault(require("./styles/spacing"));
const Flex = (_a) => {
    var { flexDirection, alignItems, justifyContent, gap, height, maxHeight, overflowY, position, top, Bottom, right, borderRadius, padding, backgroundColor, marginLeft, marginRight, marginTop, flexWrap, flexPack, width, className } = _a, rest = __rest(_a, ["flexDirection", "alignItems", "justifyContent", "gap", "height", "maxHeight", "overflowY", "position", "top", "Bottom", "right", "borderRadius", "padding", "backgroundColor", "marginLeft", "marginRight", "marginTop", "flexWrap", "flexPack", "width", "className"]);
    return (react_1.default.createElement("div", Object.assign({}, rest, { style: Object.assign({ display: "flex", flexDirection,
            justifyContent,
            alignItems,
            gap,
            height,
            flexPack,
            maxHeight,
            overflowY,
            position,
            padding,
            top,
            Bottom,
            borderRadius,
            right,
            backgroundColor,
            marginLeft,
            marginRight,
            marginTop,
            flexWrap,
            width,
            className }, rest.style) })));
};
exports.Flex = Flex;
exports.default = (props) => {
    const [name, setName] = react_1.default.useState("");
    const [email, setEmail] = react_1.default.useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (react_1.default.createElement(exports.Flex, { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: spacing_1.default.m },
        react_1.default.createElement("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: spacing_1.default.m } },
            react_1.default.createElement(material_1.Input, { style: { borderRadius: 4, height: 32, width: 350, padding: 16 }, value: name, spellCheck: "true", placeholder: "Write item", onChange: (event) => {
                    setName(event.target.value);
                } }),
            react_1.default.createElement(exports.Flex, { flexDirection: "row-reverse", justifyContent: "flexEnd", gap: 16 },
                " ",
                react_1.default.createElement(buttons_1.Button, { variant: "primary", buttonSize: "lg", type: "submit", disabled: name === "", onClick: () => {
                        var _a;
                        const object = {
                            id: Date.now(),
                            name: name,
                            userEmail: email,
                        };
                        (_a = props === null || props === void 0 ? void 0 : props.onSend) === null || _a === void 0 ? void 0 : _a.call(props, object);
                        setEmail("");
                        setName("");
                    } }, "Add Item"),
                react_1.default.createElement(buttons_1.Button, { variant: "secondary", buttonSize: "lg", onClick: () => {
                        props.onClear([]);
                    } }, "Clear list")))));
};
