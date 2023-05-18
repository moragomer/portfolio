import React from "react";
import { Flex } from "../components/input";
import spacing from "../components/styles/spacing";
import { cardsData } from "../components/data";
import Card from "../components/card";

export const Cards = () => {
  return (
    <div>
      {" "}
      <Flex gap={spacing.lg} flexWrap={"wrap"} justifyContent={"center"}>
        {cardsData.map((item, index) => {
          return <Card cardsData={item} />;
        })}
      </Flex>
    </div>
  );
};
