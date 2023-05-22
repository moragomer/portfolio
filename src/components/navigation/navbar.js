import React, { useReducer } from "react";
import { H3, H4 } from "../styles/typography";
import colors from "../styles/colors";
import { Flex } from "../input";
import { Button } from "../Buttons/buttons";
import spacing from "../styles/spacing";

import { Link, NavLink } from "react-router-dom";

import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";

function Title() {
  return (
    <Flex
      className="title"
      style={{
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.200691",
        padding: "24px",
        backgroundColor: colors.white,
        zIndex: 1,
        paddingLeft: "40px",
        alignItems: "center",
      }}
    >
      <Flex style={{ gap: spacing.m }} alignItems={"center"}>
        <NavLink
          to={`home`}
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              alignItems: "center",
              alignContent: "center",
              color: isActive ? colors.action : "black",
              padding: isActive ? 8 : 8,
              borderBottom: isActive ? `2 solid ${colors.white}` : colors.white,
              backgroundColor: isActive ? colors.white : "",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          {" "}
          <H4>🚀 My React projects</H4>
        </NavLink>
        <NavLink
          to={`home`}
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              alignItems: "center",
              alignContent: "center",
              color: isActive ? colors.action : "black",
              padding: isActive ? 8 : 8,
              borderBottom: isActive
                ? `2 solid ${colors.action}`
                : colors.white,
              backgroundColor: isActive ? colors.lightGrey : "",
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          Projects
        </NavLink>

        <NavLink
          to={`about`}
          style={({ isActive, isPending, isHover }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              alignItems: "center",
              alignContent: "center",
              color: isActive ? colors.action : "black",
              padding: isActive ? 8 : 8,
              backgroundColor: isActive ? colors.lightGrey : colors.white,
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          About
        </NavLink>
      </Flex>

      <Flex alignItems={"center"} gap={spacing.s}>
        <a href="https://www.linkedin.com/in/omer-morag/" target="blank">
          <Button variant="tertiary" buttonSize="sBmd">
            <LinkedIn />
          </Button>{" "}
        </a>
        <a href="https://www.facebook.com/morag.omer" target="blank">
          <Button variant="tertiary" buttonSize="sBmd">
            <Facebook />
          </Button>
        </a>
        <a href="https://www.instagram.com/moragos/" target="blank">
          {" "}
          <Button variant="tertiary" buttonSize="sBmd">
            <Instagram />
          </Button>
        </a>
      </Flex>
    </Flex>
  );
}

export default Title;
