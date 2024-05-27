import ColorDetails from "./components/ColorDetails";
import ColorList from "./components/ColorList";
import {Routes,Route} from "react-router-dom"
import ColorProvider from "./hooks/color-hooks";

export default function App(){
  return (
    <ColorProvider>
      <Routes>
        <Route path="/" element={<ColorList />}/>
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  )
}