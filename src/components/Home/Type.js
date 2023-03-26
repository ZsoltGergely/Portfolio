import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Linux System Administrator",
          "Full-Stack Developer",
          "Network Engineer",
          "LAMP Stack Developer",
          "Javascript, Python, C++, PHP Developer",
          "React.js, Node.js, Express.js Developer",
          "MySQL, MongoDB Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
