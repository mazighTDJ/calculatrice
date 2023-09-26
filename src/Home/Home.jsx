import { useDispatch, useSelector } from "react-redux"

import "./home.css"
import { memo,  useState } from "react"
import {   ADD_VALUE, selectStateValue} from "../Feature/toucheSlice.js"




const Home=memo(useHome)


 function useHome(){
    
    
    const dispatch=useDispatch()

    const [valeurEntrer,setValeurEntrer]=useState(useSelector(selectStateValue))

    const onChangeValeur=(e)=>{
        setValeurEntrer(e.target.value)
        setValue(valeurEntrer)
    }

    

    const [resultat,setResult]=useState(0)


    const increment=(e)=>{

        dispatch(setValue(valeurEntrer))
    }
    
    const useSelectorAccess=()=>{
       // let value=useSelector(state=>state.touche.value)
        //setResult(value)
        
    }

    const Result=(e)=>{
    
        //envoyer la valeur au magasin redux
        dispatch(ADD_VALUE(valeurEntrer))
        console.log()
        //setResult(dispatch(retourneResult()).payload)
        useSelectorAccess()
        //onChangeValeurRecu()
        
    }
    

    return(
        <div className="home">

            <input type="text" className="affichage"  value={valeurEntrer} onChange={onChangeValeur} /> 

            <div className='Touches'>
                <button onClick={increment}>+</button>
                <button onClick={Result}>=</button>   
                   {resultat}
            </div>

        </div>
    )
}

export default Home