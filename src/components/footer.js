import React from "react";
import colors from "./Styles/colors";
import { Flex } from "./input";
import spacing from "./Styles/spacing";
import logo from "./img/logo.png";
function Footer() {
  return (
    <Flex
      style={{
        width: "100%",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.200691",
        padding: "24px",
        backgroundColor: colors.white,

        zIndex: "2",
        paddingLeft: "80px",
        gap: spacing.lg,
        justifyContent: "center",
        alignItems: "center",
        Bottom: "0px",
      }}
    >
      <img src={logo} />
      <Flex style={{ gap: spacing.s }}></Flex>
    </Flex>
  );
}

export default Footer;
