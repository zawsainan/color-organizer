import { useColors } from "../hooks/color-hooks"
import useInput from "../hooks/useInput"
export default function AddColorForm(){
    const {addColor} = useColors()
    const [titleProps,resetTitle] = useInput("")
    const [colorProps,resetColor] = useInput("")
    return (
        <form onSubmit={ e =>{
            e.preventDefault();
            addColor(titleProps.value,colorProps.value)
            resetColor();
            resetTitle();
        }}>
            <input type="text" name="title" {...titleProps} />
            <input type="color" name="color" {...colorProps} />
            <button>Add</button>
        </form>
    )
}