import React from "react";
import Sliders from "./Sliders";
import telemach from "../assets/telemach.png";
import { useColors, useColorUpdate } from "../contexts/ColorContext";
import domtoimage from "dom-to-image";
import download from "downloadjs";

import {
  Container,
  Center,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

function Telemach() {
  const colors = useColors();
  const changeColor = useColorUpdate();

  // Convert div to image and download it
  const downloadImage = () => {
    domtoimage.toPng(document.getElementById("image")).then(function (dataUrl) {
      download(dataUrl, "telemach-skittle.png");
    });
  };

  return (
    <Container
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Center
        boxSize="320px"
        bg={`rgb(${colors.red}, ${colors.green}, ${colors.blue})`}
        borderRadius="50%"
        id="image"
      >
        <Image src={telemach} width="90%" />
      </Center>
      <Sliders />
      <ButtonGroup colorScheme="green" mt={10} size="lg">
        <Button onClick={downloadImage}>Download</Button>
        <Button
          variant="outline"
          onClick={() => changeColor({ red: 142, green: 3, blue: 246 })}
        >
          Reset
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default Telemach;
