import React from "react";
import Sliders from "./Sliders";
import telemach from "../assets/telemach.png";
import { ColorContext, colors } from "../contexts/ColorContext";

import { Container, Center, Image } from "@chakra-ui/react";

function App() {
  return (
    <ColorContext.Provider value={colors}>
      <Container
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Center
          boxSize="256px"
          bg={`rgb(${colors.red}, ${colors.green}, ${colors.blue})`}
          borderRadius="50%"
        >
          <Image src={telemach} width="90%" />
        </Center>
        <Sliders />
      </Container>
    </ColorContext.Provider>
  );
}

export default App;
