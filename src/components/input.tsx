import React from "react";
import { Button } from "./Buttons/buttons";
import { Label } from "./styles/typography";
import buttonSize from "./sizes/buttonSize";
import { Input } from "@mui/material";
import spacing from "./styles/spacing";
type FlexProps = any;

export const Flex = ({
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  height,
  maxHeight,
  overflowY,
  position,
  top,
  Bottom,
  right,
  borderRadius,
  padding,
  backgroundColor,
  marginLeft,
  marginRight,
  marginTop,
  flexWrap,
  flexPack,
  width,

  ...rest
}:FlexProps) => (
  <div
    {...rest}
    style={{
      display: "flex",
      flexDirection,
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

      ...rest.style,
    }}
  />
);
export default (props:any) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={spacing.m}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: spacing.m }}
      >
        <Input
          style={{ borderRadius: 4, height: 32, width: 350, padding: 16 }}
          value={name}
          spellCheck="true"
          placeholder="Write item"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Flex flexDirection="row-reverse" justifyContent="flexEnd" gap={16}>
          {" "}
          <Button
            variant="primary"
            buttonSize="lg"
            type="submit"
            disabled={name === ""}
            onClick={() => {
              const object = {
                id: Date.now(),
                name: name,
                userEmail: email,
              };
              props?.onSend?.(object);
              setEmail("");
              setName("");
            }}
          >
            Add Item
          </Button>
          <Button
            variant="secondary"
            buttonSize="lg"
            onClick={() => {
              props.onClear([]);
            }}
          >
            Clear list
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
