import React, { useState, useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

export default function Sliders() {
  const colors = useContext(ColorContext);

  console.log(colors);

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <>
      <Slider
        min={0}
        max={255}
        onChange={(value) => setRed(value)}
        defaultValue={red}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        min={0}
        max={255}
        onChange={(value) => setGreen(value)}
        defaultValue={blue}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        min={0}
        max={255}
        onChange={(value) => setBlue(value)}
        defaultValue={green}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
