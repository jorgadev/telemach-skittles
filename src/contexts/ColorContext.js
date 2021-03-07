import React, { useContext, useState } from "react";

// Create context for color and color update
const ColorContext = React.createContext();
const ColorUpdateContext = React.createContext();

// Create custom hooks for using these contexts
export function useColors() {
  return useContext(ColorContext);
}
export function useColorUpdate() {
  return useContext(ColorUpdateContext);
}

// Provider component which replaces ColorContext.Provider, takes a children and render it
export function ColorProvider({ children }) {
  const [colors, setColors] = useState({ red: 142, green: 3, blue: 246 });

  const changeColor = (newColors) => {
    setColors(newColors);
  };

  return (
    <ColorContext.Provider value={colors}>
      <ColorUpdateContext.Provider value={changeColor}>
        {children}
      </ColorUpdateContext.Provider>
    </ColorContext.Provider>
  );
}
