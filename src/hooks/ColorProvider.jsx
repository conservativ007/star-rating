import React, { createContext, useContext, useState } from 'react';
import colorData from "../data/colors.json";

const colorContext = createContext();
export const useColors = () => useContext(colorContext);

const Colorprovider = ({ children }) => {
  const [colors, setColors] = useState(colorData);

  function changeRating (id, rating) {
    setColors(
      colors.map(color => color.id === id ? { ...color, rating } : { ...color })
    )
  }

  return (
    <colorContext.Provider value={{colors, changeRating}} >
      {children}
    </colorContext.Provider>
  );
}

export default Colorprovider;
