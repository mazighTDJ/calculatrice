import { useDispatch, useSelector } from "react-redux"
import Touches from "./Touches/Touches.jsx"
import "./home.css"
import { useEffect, useState } from "react"
import { initialState, retourneResult, setValue } from "../Feature/toucheSlice.js"



export default function Home(){
    
    
    const dispatch=useDispatch()
    const [valeurEntrer,setValeurEntrer]=useState(0)

    const onChangeValeur=(e)=>{
        setValeurEntrer(e.target.value)
        setValue(valeurEntrer)
    }

    
    useEffect(()=>{
        /*const value=dispatch(retourneResult().payload)
        if(value!=undefined){
            setValeurEntrer(value)
        }
        */
    },[])

    return(
        <div className="home">
            <input type="number" className="affichage"  value={valeurEntrer} onChange={onChangeValeur} /> 

            <Touches  valueInitial={valeurEntrer} />
        </div>
    )
}