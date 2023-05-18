import React from "react";
import { Link } from "react-router-dom";
import Form, { Flex } from "../components/input";
import Item from "../components/Item";
import colors from "../components/styles/colors";
import { H3, H4, P, Pbold } from "../components/styles/typography.js";
import spacing from "../components/styles/spacing";

const ShoppingList = (props) => {
  const [items, setItems] = React.useState([
    { id: 1, name: "Test", checked: false },
  ]);

  const name = props.name;

  const done = props.checked;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.lg,
        flex: 1,
      }}
    >
      <Flex
        flexDirection="column"
        gap={spacing.s}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <H3>Hello,{name}</H3>
        <H4>Welcome to shopping list</H4>
        <Flex style={{ gap: spacing.xs }}>
          <P>
            You have {items.length - items.filter((i) => i.checked).length}{" "}
          </P>
          <Pbold>items left to buy</Pbold>{" "}
          <Link to={"../cards"} relative="path">
            in your cart
          </Link>
        </Flex>
      </Flex>
      {/* form */}
      <div>
        <Form
          onSend={(obj) => {
            setItems((prev) => [...prev, obj]);
          }}
          onClear={() => setItems([])}
        />
      </div>
      {/* Items */}
      <div>
        <Flex
          flexDirection="column"
          alignItems={"center"}
          gap={spacing.m}
          borderRadius="16px"
          maxHeight={"400px"}
          overflowY={"scroll"}
          margin={spacing.lg}
          padding={16}
          justifyContent={"center"}
        >
          {[
            ...items.filter((i) => !i.checked),
            ...items.filter((i) => i.checked),
          ].map((someItem, indx) => {
            return (
              <Flex>
                <Flex
                  flexDirection="column"
                  id={someItem.id}
                  style={{
                    width: 315,
                    border: "1px solid",
                    borderColor: "Grey",
                    borderRadius: 16,
                    padding: spacing.m,
                    backgroundColor: colors.white,
                  }}
                >
                  <Item
                    key={indx + someItem.id}
                    text={someItem.name}
                    isChecked={someItem.checked}
                    onToggle={() => {
                      setItems((old) => {
                        const myIndex = old.findIndex(
                          (i) => i.id == someItem.id
                        );
                        return [
                          ...old.slice(0, myIndex),
                          { ...someItem, checked: !someItem.checked },
                          ...old.slice(myIndex + 1),
                        ];
                      });
                      if (someItem.checked)
                        setTimeout(
                          () =>
                            document
                              .getElementById(someItem.id)
                              .scrollIntoView({ smooth: true }),
                          100
                        );
                    }}
                    onDelete={() => {
                      setItems((old) =>
                        old.filter((i) => i.id !== someItem.id)
                      );
                    }}
                    onEditDone={(updatedText) => {
                      setItems((old) =>
                        old.map((i) =>
                          i.id === someItem.id ? { ...i, name: updatedText } : i
                        )
                      );
                    }}
                  />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </div>
    </div>
  );
};
export { ShoppingList };
