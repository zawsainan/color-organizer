import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onSelectStar = (f) => f,
}) {
  return (
    <>
      {createArray(totalStars).map((x, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => onSelectStar(i + 1)}
        />
      ))}
      <h5>
        {selectedStars} of {totalStars} stars.
      </h5>
    </>
  );
}
