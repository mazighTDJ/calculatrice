import { useDispatch, useSelector } from "react-redux"
import Touches from "./Touches/Touches.jsx"
import "./home.css"
import { memo, useEffect, useMemo, useState } from "react"
import {  setValue } from "../Feature/toucheSlice.js"

const Home=memo(useHome)


 function useHome(){
    
    
    const dispatch=useDispatch()

    const valueSelector=useSelector(state=>state.touche.value)

    const [valeurEntrer,setValeurEntrer]=useState(0)

    const onChangeValeur=(e)=>{
        setValeurEntrer(e.target.value)
        setValue(valeurEntrer)
    }

    const onChangeValeurRecu=(value)=>{
        setValeurEntrer(value)
    }
    

    return(
        <div className="home">
            <input type="text" className="affichage"  value={valeurEntrer} onChange={onChangeValeur} /> 

            <Touches  valueInitial={valeurEntrer} onChangeValeurRecu={onChangeValeurRecu} />
        </div>
    )
}

export default Home