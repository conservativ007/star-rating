import React, { useState } from 'react';
import "../styles/colorForm.css";
import { useColors } from '../hooks/ColorProvider';

const Addcolorform = () => {

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const {addColor} = useColors();


  function addColorF() {
    if(!title || !color) {
      console.log("you must to fill all the inputs");
      return;
    } 
    addColor(title, color);
    setTitle("");
    setColor("#000000");
  }

  return (
    <div className='color-form'>
      <input 
        type="text" 
        placeholder='enter title' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required
      />
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)}
        required 
      />
      <button onClick={addColorF} >add color</button>
    </div>
  );
}

export default Addcolorform;
