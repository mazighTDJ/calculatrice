import { useSelector } from "react-redux"
import Touches from "./Touches/Touches.jsx"
import "./home.css"



export default function Home(){
    const value=useSelector((state)=>state.touche.value)
    return(
        <div className="home">
            <input type="text" className="affichage"  value={value} onChange={DOMRectReadOnly} />
            <Touches />
        </div>
    )
}