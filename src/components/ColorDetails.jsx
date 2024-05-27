import { useColors } from "../hooks/color-hooks"
import {useParams} from "react-router-dom"
export default function ColorDetails(){
    const {colors} = useColors();
    const {id} = useParams();
    const {color,title} = colors.find(color => color.id == id)

    return (
        <div>
            <div style={{backgroundColor:color,width:100,height:100}}></div>
            <h1>Color title: {title}</h1>
            <h1>Color code: {color}</h1>
        </div>
    )
}