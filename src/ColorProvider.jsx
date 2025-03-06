import { createContext, useState } from "react";
import { colorData } from "./data";
import { v4 } from "uuid";
export const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id == id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const addColor = (title, color) => {
    const newColor = {
      id: v4(),
      title,
      color,
      rating: 0,
    };
    setColors([...colors, newColor]);
  };

  const removeColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <ColorContext.Provider value={{ colors, rateColor, addColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
}
