import React from "react";
import colors from "./styles/colors";
import "./styles/style.css";
import { Flex } from "./input";
import { H3, H2, H4, H5, P, Label } from "./styles/typography";
import spacing from "./styles/spacing";


import { Link } from "react-router-dom";
import styled from "styled-components";
const ProjectStyledCard = styled(Flex)`

  padding: 24px;
  max-width: 360px;
  min-width: 360px;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

&:hover {
  transform: scale(1.08);
}
`
function ProjectCard({ projectData }:any) {
  return (
    <div>
      <Link to={projectData.link} style={{ textDecoration: "none" }}>
        <ProjectStyledCard gap={spacing.lg} style={{ borderRadius: 16 }}>
          <H2>{projectData.icon}</H2>
          <Flex flexDirection={"column"} gap={spacing.s} alignItems={"start"}>
            {" "}
            <H4>{projectData.name}</H4>
            <P style={{ color: colors.grey }}>{projectData.date}</P>
          </Flex>
        </ProjectStyledCard>
      </Link>
    </div>
  );
}
export default ProjectCard;
