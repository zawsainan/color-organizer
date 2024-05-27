import { createContext, useContext, useState } from "react";
import colorData from "../assets/data"
import { v4 } from "uuid";
const ColorContext = createContext();

export default function ColorProvider({children}){
    const [colors,setColors] = useState(colorData);
    
    const addColor = (title,color) => {
        setColors(prev =>[...prev,{id:v4(),color,title,rating:0}])
    }

    const removeColor = id => setColors(prev => prev.filter(color => color.id !== id))

    const rateColor = (id,rating) => setColors(prev => prev.map(color => color.id == id ? {...color,rating} : color))

    return (
        <ColorContext.Provider value={{colors,addColor,removeColor,rateColor}}>
        {children}
        </ColorContext.Provider>
    )

}
export const useColors = () => useContext(ColorContext) 