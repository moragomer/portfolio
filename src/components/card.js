import react from "react";
import colors from "./styles/colors";

import { Flex } from "./input";
import { H3, H4, H5, P, Label } from "./styles/typography";
import spacing from "./styles/spacing";
import { Button } from "./Buttons/buttons";
import { ThumbDown, ThumbUp, AutoAwesome } from "@mui/icons-material";
import Timer from "@mui/icons-material/TimerOutlined";
import { Avatar } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";

import card1 from "./img/card1.jpeg";
import card2 from "./img/card2.jpeg";
import card3 from "./img/card3.jpeg";
import card4 from "./img/card4.jpeg";
import card5 from "./img/card5.jpeg";
import card6 from "./img/card6.jpeg";

// Card color

const cardColor = {
  Project: {
    borderBottom: `8px solid ${colors.sky}`,
  },
  Position: {
    borderBottom: `8px solid ${colors.coral}`,
  },
};

//  Card cover
const imgs = [card1, card2, card3, card4, card5, card6];

function Card({ cardsData }) {
  return (
    <div
      style={{
        backgroundColor: colors.white,
        maxWidth: 360,
        minWidth: 360,
        maxHeight: 470,
        height: 508,
        borderRadius: 16,
        border: "1px solid #E0E0E0",
        overflow: "hidden",
        marginRight: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          borderBottom: cardColor[cardsData.label]?.borderBottom,
          marginRight: "auto",
          maxWidth: 360,
          position: "relative",
          flex: 1,
          overflow: "hidden",
          height: 150,
        }}
      >
        <div
          style={{
            backgroundColor: colors.white,
            color: colors.darkGrey,
            padding: "8px",
            position: "absolute",
            left: spacing.m,
            top: spacing.m,
            borderRadius: 4,
          }}
        >
          {cardsData.label}
        </div>
        <img
          src={imgs[Math.floor(Math.random() * imgs.length)]}
          width={"100%"}
          borderRadius={"16px"}
          display="block"
        />
      </div>
      <div style={{ padding: spacing.s, flex: 2 }}>
        <Flex flexDirection={"column"} alignItems="flex-start" gap={spacing.m}>
          <H3>{cardsData.title}</H3>
          <Flex gap={spacing.m} alignItems={"center"}>
            <Label style={{ fontSize: 14 }}>{cardsData.projectName}</Label>
            <Flex alignItems={"center"} gap={spacing.xs}>
              <Timer style={{ fontSize: 20 }} />
              <Label style={{ fontSize: 14 }}>X hours per week</Label>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} gap={spacing.m}>
            <Avatar />
            <H5 color={colors.darkGrey}>User name</H5>
          </Flex>
          <Flex alignItems={"center"} gap={spacing.s}>
            <AutoAwesome style={{ color: colors.yellow }} />
            <P>Gain skills important to your organization </P>
          </Flex>
        </Flex>
      </div>
      <div
        style={{
          padding: spacing.s,
          position: "absolute",
          bottom: 0,
          right: 0,
          flex: 1,
          padding: 24,
          width: "100%",
          borderTop: "1px solid #E0E0E0",
        }}
      >
        <Flex gap={spacing.s} justifyContent={"space-between"}>
          <Flex gap={spacing.s}>
            {" "}
            <Button variant="tertiary" bottonSize="sBlg">
              <ShareIcon />{" "}
            </Button>
            <Button variant="tertiary" buttonSize="sBlg">
              <FavoriteBorderOutlinedIcon />
            </Button>
          </Flex>
          <Flex gap={spacing.s}>
            {" "}
            <Button variant="tertiary" bottonSize="sBlg">
              <ThumbDown />{" "}
            </Button>
            <Button variant="primary" buttonSize="sBlg">
              <ThumbUp />
            </Button>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
export default Card;
