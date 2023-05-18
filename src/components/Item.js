import React from "react";
import { Flex } from "./input";
import spacing from "./styles/spacing";
import { Button } from "./Buttons/buttons";
import { P, Crossed } from "./styles/typography";

export default ({ text, onEditDone, onDelete, isChecked, onToggle, id }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(text);

  // Edit
  if (isEdit) {
    return (
      <div style={{ position: "relative" }}>
        <Flex
          flexDirection="row"
          gap={8}
          position="absolute"
          top="-6"
          right="0"
        >
          <Button
            variant="secondary"
            buttonSize="sm"
            onClick={() => {
              setIsEdit((old) => !old);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            buttonSize="sm"
            onClick={() => {
              setIsEdit((old) => !old);
              onEditDone(inputValue);
            }}
          >
            Save
          </Button>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="flexStart"
          flexDirection="row"
        >
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.keyCode == 13) {
                console.log(inputValue);
                onEditDone(inputValue);
              }
            }}
          ></input>{" "}
        </Flex>
      </div>
    );
  }
  // Checked
  if (isChecked) {
    return (
      <div style={{ position: "relative" }}>
        <Flex
          flexDirection="row"
          gap={8}
          position="absolute"
          top="-6"
          right="0"
        >
          <Button buttonSize="sm" variant="secondary" onClick={onDelete}>
            Delete
          </Button>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="flexStart"
          flexDirection="row"
          backgroundColor="white"
          gap={8}
          id={id}
          style={{ position: "reletive" }}
        >
          <input
            type="checkbox"
            checked="checked"
            value={isChecked}
            onChange={() => {
              onToggle();
            }}
          />
          <Crossed style={{ wordBreak: "break-all" }}>{text}</Crossed>{" "}
        </Flex>
      </div>
    );
  }
  // default
  return (
    <div style={{ position: "relative" }} id={id}>
      <Flex flexDirection="row" gap={8} position="absolute" top="-6" right="0">
        <Button buttonSize="sm" variant="secondary" onClick={onDelete}>
          Delete
        </Button>
        <Button
          variant="primary"
          buttonSize="sm"
          onClick={() => {
            setIsEdit((old) => !old);
          }}
        >
          Edit
        </Button>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="flexStart"
        flexDirection="row"
        backgroundColor="white"
        padding="1.25 0"
        gap={spacing.s}
      >
        <input
          type="checkbox"
          value={isChecked}
          onChange={() => {
            onToggle();
          }}
        />
        <P style={{ wordBreak: "break-all" }}>{text}</P>{" "}
      </Flex>
    </div>
  );
};
