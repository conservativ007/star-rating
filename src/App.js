import React, { useState } from 'react';
import './App.css';
import Colors from './components/Colors';
import dataColors from "./data/colors.json";

export const ColorsContext = React.createContext();


function App() {

  // const [colors, setColors] = useState(dataColors);

  // function changeRating (id, rating) {
  //   setColors(
  //     colors.map(color => color.id === id ? { ...color, rating } : { ...color })
  //   )
  // }

  return (
    <div className="App">
      <Colors 
        // colors={colors} 
        // changeRating={changeRating}
      />
    </div>
  );
}

export default App;
