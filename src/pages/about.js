import React from "react";
import { useSpring, animated, easings } from "@react-spring/web";

export const About = () => {
  const springs = useSpring({
    from: { x: 0, y: 0, opacity: 0 },
    to: { x: 100, y: 100, opacity: 1 },
    config: {
      easing: easings.steps(15),
    },
  });
  return (
    <div>
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
    </div>
  );
};
