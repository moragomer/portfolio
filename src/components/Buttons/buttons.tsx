import styled, { css } from "styled-components";
import colors from "../styles/colors";
import buttonSize from "../sizes/buttonSize";
import textSize from "../sizes/textSize";

type ButtonStyle = {
  backgroundColor: string;
    hover?: {
      backgroundColor?: string;
      color?: string;
    },
    disabled?: {
      backgroundColor: string,
      color: string,
    },
    color: string;
    borderColor: string;
    fontSize: string;

  
}
const buttonVariant:{[key in 'primary' | 'secondary' | 'tertiary']:ButtonStyle} = {
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

export const Button = styled.button<{variant:keyof typeof buttonVariant, buttonSize:keyof typeof buttonSize }>`
font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 8px;
  border: 1px solid;
  font-weight: 500;
  ${(props: {variant:keyof typeof buttonVariant}) =>
  buttonVariant[props?.variant]?.hover &&
    css`
      &:hover {
        background-color: ${buttonVariant[props?.variant]?.hover
          ?.backgroundColor};
        color: ${buttonVariant[props?.variant]?.hover?.color};
      }
    `}
  ${(props) =>
    buttonVariant[props?.variant]?.disabled &&
    css`
      &:disabled {
        background-color: ${buttonVariant[props?.variant]?.disabled
          ?.backgroundColor};
        color: ${buttonVariant[props?.variant]?.disabled?.color};
      }
    `}
  background-color: ${(props) =>
    buttonVariant[props.variant || "primary"]?.backgroundColor};
  color: ${(props) => buttonVariant[props.variant || "primary"]?.color};
  border-color: ${(props) =>
    buttonVariant[props.variant || "primary"]?.borderColor};
  font-size: ${(props) => buttonVariant[props.variant || "primary"]?.fontSize};
  padding: ${(props) => buttonSize[props.buttonSize || "lg"]};
`;
