import styled, { css } from "styled-components";
import colors from "../styles/colors";
import buttonSize from "../sizes/buttonSize";
import textSize from "../sizes/textSize";

const buttonStyles = {
  primary: {
    backgroundColor: colors.action,
    hover: {
      backgroundColor: colors.darkAction,
      color: colors.white,
    },
    disabled: {
      backgroundColor: colors.grey,
      color: colors.darkGrey,
    },
    color: colors.white,
    borderColor: colors.action,
    fontSize: textSize.sm,
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.action,
    borderColor: colors.action,
    fontSize: textSize.sm,
    hover: {
      backgroundColor: colors.action,
      color: colors.white,
    },
  },
  tertiary: {
    backgroundColor: colors.white,
    hover: {
      backgroundColor: colors.lightGrey,
      color: colors.action,
    },
    color: colors.action,
    borderColor: colors.white,
    fontSize: textSize.sm,
  },
};

export const Button = styled.button`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 8px;
  border: 1px solid;
  font-weight: 500;
  ${(props) =>
    buttonStyles[props?.variant]?.hover &&
    css`
      &:hover {
        background-color: ${buttonStyles[props?.variant]?.hover
          .backgroundColor};
        color: ${buttonStyles[props?.variant]?.hover.color};
      }
    `}
  ${(props) =>
    buttonStyles[props?.variant]?.disabled &&
    css`
      &:disabled {
        background-color: ${buttonStyles[props?.variant]?.disabled
          .backgroundColor};
        color: ${buttonStyles[props?.variant]?.disabled.color};
      }
    `}
  background-color: ${(props) =>
    buttonStyles[props.variant || "primary"]?.backgroundColor};
  color: ${(props) => buttonStyles[props.variant || "primary"]?.color};
  border-color: ${(props) =>
    buttonStyles[props.variant || "primary"]?.borderColor};
  font-size: ${(props) => buttonStyles[props.variant || "primary"]?.fontSize};
  padding: ${(props) => buttonSize[props.buttonSize || "lg"]};
`;
