import {FaStar} from "react-icons/fa6"
export default function Star({selected = false,onRateColor = f => f}){
    return <FaStar style={{color:selected ? "red" : "grey"}} onClick={onRateColor} />
}