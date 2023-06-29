import React from "react";
import { H1, H3, H4, H5 } from "../components/styles/typography";
import { Flex } from "../components/input";
import spacing from "../components/styles/spacing";
import TypewriterComponent from "typewriter-effect";
import reactLogo from "../components/img/reactLogo.png";
import colors from "../components/styles/colors";
import ProjectCard from "../components/project";
import { projectData } from "../components/data";
import { useSpring, animated, easings } from "@react-spring/web";

export const Home = () => {
  const springs = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      easing: easings.steps(24),
      duration: 3000,
    },
  });
  const [showProjects, setShowProjects] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShowProjects(true);
    }, 1500);
  }, []);
  return (
    <Flex flexDirection={"column"} gap={spacing.xxxl} padding={40}>
      <Flex
        flexDirection={"column"}
        gap={spacing.xxl}
        marginTop={80}
        alignItems={"center"}
        padding={"40px"}
      >
        <H5 style={{ fontSize: 64, fontFamily: "Source Code Pro" }}>
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              delay: 268,
              strings: ["I learn React.js", "It's crazy, right?"],
            }}
          />
        </H5>
        <img src={reactLogo} height={"80px"} width={"100px"} />
      </Flex>
      {showProjects && (
        <animated.div
          style={{
            ...springs,
          }}
        >
          <Flex
            gap={spacing.lg}
            flexWrap={"wrap"}
            justifyContent={"center"}
            padding={"0px 156px"}
          >
            {projectData.map((item, index) => {
              return <ProjectCard projectData={item} />;
            })}
          </Flex>
        </animated.div>
      )}
    </Flex>
  );
};
