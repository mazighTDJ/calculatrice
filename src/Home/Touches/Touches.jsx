
import Touche from './Touche'
import './touches.css'

import listTouches from './gestionTouches'
import {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_VALUE, retourneResult, setValue } from '../../Feature/toucheSlice'

export default function Touches ({valueInitial,onChangeValeurRecu}){
    


    const [resultat,setResult]=useState()

    const dispatch=useDispatch()

    const increment=(e)=>{

        dispatch(setValue(valueInitial))
    }
    
    const useSelectorAccess=()=>{
       // let value=useSelector(state=>state.touche.value)
        //setResult(value)
        
    }

    const Result=(e)=>{
    
        //envoyer la valeur au magasin redux
        dispatch(ADD_VALUE(valueInitial))
        //setResult(dispatch(retourneResult()).payload)
        useSelectorAccess()
        //onChangeValeurRecu()
        console.log(resultat)
    }

    return(
        
        <div className='Touches'>
            {
                
                listTouches.map((element,i)=>{
                    return(
                        <Touche nom={element.nom}  typeAction={element.typeAction} key={i}/>
                    )
                })
            }
            <button onClick={increment}>+</button>
            <button onClick={Result}>=</button>   
            {resultat}
        </div>
    )
}