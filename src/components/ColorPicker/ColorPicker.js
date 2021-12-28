import { useState } from "react";
import "./ColorPicker.css"



const ColorPicker = () => {
    const [color, setColor] = useState("#000000")
    return (  
            <div className="contenedorInput" style={{backgroundColor: color}} >
                <div className="input">
                <h1> Color Picker</h1>
                <input type= "color" value={color} onChange={(e) => setColor(e.target.value)}></input>
                <input type="text" value={color}></input>
                </div>
            </div>
       
    );
}
 
export default ColorPicker;