import styled from "styled-components";
import colors from "./colors";
import textSize from "../sizes/textSize";
// import '@fontsource/roboto/400.css';
// import '@fontsource/poppins/400.css';
type H1props = {
  textSize?: string;
  color?: string;
};
export const H1 = styled.h1`
  color: ${(props) => props.color || colors.darkestGrey};
  text-align: center;
  font-size: ${(props: H1props) => props.textSize || textSize.xxl};
  font-weight: 600;
  margin: 0;
  }
  
}
`;
export const H2 = styled(H1)`
  font-size: ${(props) => props.textSize || textSize.xl};
`;
export const H3 = styled(H1)`
  font-size: ${(props) => props.textSize || textSize.lg};
`;
export const H4 = styled(H1)`
  font-size: ${(props) => props.textSize || textSize.md};
`;
export const H5 = styled(H1)`
  font-size: ${(props) => props.textSize || textSize.sm};
`;
export const H6 = styled(H1)`
  font-size: ${(props) => props.textSize || textSize.xs};
`;
export const P = styled.p<H1props | HTMLParagraphElement>`
  font-size: ${(props) => props.textSize || textSize.sm};
  color: ${(props) => props.color || colors.darkGrey};
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const Pbold = styled(P)`
  font-weight: 600;
  color: ${(props) => props.color || colors.darkGrey};
`;
export const Crossed = styled(P)`
  font-weight: 300;
  color: ${(props) => props.color || colors.grey};
  text-decoration: line-through;
`;
export const Label = styled(P)`
font-size=${textSize.xs};
color:${colors.darkGrey}
`;
