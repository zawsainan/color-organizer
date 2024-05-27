import { useColors } from "../hooks/color-hooks";
import Color from "./Color";
import AddColorForm from "./AddColorForm"

export default function ColorList(){
    const {colors} = useColors();
    return (
        <>
        {!colors.length && <h1>No colors listed.</h1>}
        {
            colors.map(color => <Color key={color.id} {...color} />)
        }
        <AddColorForm />
        </>
    )
}