import { useColors } from "./hooks/useColors";
import useInput from "./hooks/useInput";
export default function AddColorForm() {
  const { addColor } = useColors();
  const [titleProps, resetTitleProps] = useInput("");
  const [colorProps, resetColorProps] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitleProps();
    resetColorProps();
  };
  return (
    <form onSubmit={submit}>
      <input type="text" {...titleProps} placeholder="color title" required />
      <input type="color" {...colorProps} required />
      <button>Add</button>
    </form>
  );
}
