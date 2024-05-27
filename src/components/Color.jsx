import { useColors } from "../hooks/color-hooks";
import {FaTrash} from "react-icons/fa6"
import StarRating from "./StarRating";
import {useNavigate} from "react-router-dom"

export default function Color({color,id,rating,title}){
    const {removeColor,rateColor} = useColors();
    const navigate = useNavigate();

    return (
        <div>
            <FaTrash onClick={() => removeColor(id)} />
            <div onClick={() => navigate(`/${id}`)} style={{backgroundColor:color,height:50}}></div>
            <h1>{title}</h1>
            <StarRating rating={rating} onRate={rating => rateColor(id,rating)} />
        </div>
    )
}