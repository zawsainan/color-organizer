import { FaXmark } from "react-icons/fa6";
import StarRating from "./StarRating";

export default function Color({ id, rating, color, title, onRate, onRemove }) {
  return (
    <div>
      <FaXmark onClick={() => onRemove(id)} />
      <div style={{ backgroundColor: color, height: "50px" }}></div>
      <h4>{title}</h4>
      <StarRating
        selectedStars={rating}
        onSelectStar={(rating) => onRate(id, rating)}
      />
    </div>
  );
}
