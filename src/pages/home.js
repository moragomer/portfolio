import React from "react";
import { H1, H3, H4, H5 } from "../components/styles/typography";
import { Flex } from "../components/input";
import spacing from "../components/styles/spacing";
import TypewriterComponent from "typewriter-effect";
import reactLogo from "/Users/Omer.m/Downloads/My Documents/projects/code-learning/learn-react/src/components/img/reactLogo.png";
import colors from "../components/styles/colors";
import ProjectCard from "../components/project";
import { projectData } from "../components/data";
import { useSpring, animated, easings } from "@react-spring/web";

export const Home = () => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      easing: easings.easeInOutBounce,
    },
  });
  const [showProjects, setShowProjects] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShowProjects(true);
    }, 3000);
  }, []);
  return (
    <Flex flexDirection={"column"} gap={spacing.xxxl} padding={40}>
      <Flex
        flexDirection={"column"}
        gap={spacing.m}
        marginTop={80}
        alignItems={"center"}
        padding={"40px"}
      >
        <img src={reactLogo} height={"160px"} width={"200px"} />
        <H5 style={{ fontSize: 64, fontFamily: "Source Code Pro" }}>
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              delay: 268,
              strings: ["I learn React", "It's crazy, right?"],
            }}
          />
        </H5>
      </Flex>
      {showProjects && (
        <animated.div
          style={{
            ...springs,
          }}
        >
          <Flex gap={spacing.lg} flexWrap={"wrap"} justifyContent={"center"}>
            {projectData.map((item, index) => {
              return <ProjectCard projectData={item} />;
            })}
          </Flex>
        </animated.div>
      )}
    </Flex>
  );
};
