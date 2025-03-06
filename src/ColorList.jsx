import Color from "./Color";
import { useColors } from "./hooks/useColors";

export default function ColorList() {
  const { colors, rateColor, removeColor } = useColors();
  if (!colors.length) return <div>No colors listed. (Add a color)</div>;
  return (
    <>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRate={rateColor}
          onRemove={removeColor}
        />
      ))}
    </>
  );
}
