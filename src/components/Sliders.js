import React from "react";
import { useColors, useColorUpdate } from "../contexts/ColorContext";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Container,
} from "@chakra-ui/react";

export default function Sliders() {
  const colors = useColors();
  const changeColor = useColorUpdate();

  return (
    <Container mt={10}>
      <Slider
        min={0}
        max={255}
        value={colors.red}
        onChange={(value) => changeColor({ ...colors, red: value })}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        min={0}
        max={255}
        value={colors.green}
        onChange={(value) => changeColor({ ...colors, green: value })}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        min={0}
        max={255}
        value={colors.blue}
        onChange={(value) => changeColor({ ...colors, blue: value })}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Container>
  );
}
