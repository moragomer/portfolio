import React from "react";
import { P, H1 } from "../components/styles/typography";
import { Flex } from "../components/input";
import spacing from "../components/styles/spacing";
export const About = () => {
  return (
    <Flex
      flexDirection="column"
      width="450px"
      gap={spacing.lg}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <H1>About this project</H1>
      <P>
        Working as a Product Designer means working closely with the Front-end
        team. To improve our workflow, I decided to learn how to code so that I
        could better understand the way engineers build components, inspect
        designs, and be receptive to design suggestions.
        <br />
        <br />
        Initially, I started learning to code using different applications such
        as "Mimo" and "Grasshopper", and then continued with Udemy. However,
        learning without practical application seemed a bit futile. Therefore, I
        sought help from the Front-end team in my organization. With the
        invaluable assistance of{" "}
        <a
          href="https://www.linkedin.com/in/amit-kastel-3a54b3133/"
          target="blank"
        >
          Amit Kastel
        </a>{" "}
        and the other engineers, I embarked on my own React.js project. I began
        with a simple shopping list, learning how to create various React
        components that I could later use in composition.
        <br />
        <br />
        However, my curiosity grew, and I wanted to explore and learn more.
        Consequently, I started adding more projects and functionality to my
        React app.
        <br />
        <br />
        I acquired proficiency in using different hooks and styled-components. I
        also experimented with various React libraries and services, such as
        Formik, MUI, React Router, and Rechart. Once I built the main app in
        React.js, I decided to convert some parts of it into TypeScript (which
        was challenging but undoubtedly beneficial). This project and the
        knowledge gained from it helped me plan my designs more effectively.
        <br />
        <br />
        I learned how to base my design on existing code and reuse components.
        Now I understand why there are multiple variants of buttons or even
        texts.
        <br />
        <br />
        However, the most significant value is that I can now understand
        engineers better and determine when something is possible or expect a
        more detailed explanation, rather than accepting statements like "this
        will be difficult to build" or "that is impossible".
        <br />
        <br />
        From this point forward, all that remains is continuous practice and
        further learning.
      </P>
    </Flex>
  );
};
