import React, { useContext } from "react";
import Telemach from "./Telemach";

import { ColorProvider } from "../contexts/ColorContext";

function App() {
  return (
    <ColorProvider>
      <Telemach />
    </ColorProvider>
  );
}

export default App;
