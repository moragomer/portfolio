import react from "react";
import colors from "./styles/colors";

import { Flex } from "./input";
import { H3, H2, H4, H5, P, Label } from "./styles/typography";
import spacing from "./styles/spacing";
import { Button } from "./Buttons/buttons";
import { ThumbDown, ThumbUp, AutoAwesome } from "@mui/icons-material";
import Timer from "@mui/icons-material/TimerOutlined";
import { Avatar } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";

function ProjectCard({ projectData }) {
  return (
    <div>
      <Link to={projectData.link} style={{ textDecoration: "none" }}>
        <Flex
          gap={spacing.lg}
          style={{
            borderRadius: "16px",

            padding: "24px",
            maxWidth: "360px",
            minWidth: "360px",
            boxShadow: `1px 2px 9px rgba(0, 0, 0, 0.2)`,
          }}
        >
          <H2>{projectData.icon}</H2>
          <Flex flexDirection={"column"} gap={spacing.s} alignItems={"start"}>
            {" "}
            <H4>{projectData.name}</H4>
            <P style={{ color: colors.grey }}>{projectData.date}</P>
          </Flex>
        </Flex>
      </Link>
    </div>
  );
}
export default ProjectCard;
