import Star from "./Star"

const createArray = length => [...Array(length)]

export default function StarRating({totalStars = 5,rating = 0,onRate = f => f}){
    return (
        <>
        {
            createArray(totalStars).map((star,i) => <Star key={i} onRateColor={() => onRate(i + 1)} selected={ i < rating} />)
        }
        </>
    )
}