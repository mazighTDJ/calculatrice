
import Touche from './Touche'
import './touches.css'

import listTouches from './gestionTouches'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValue } from '../../Feature/toucheSlice'

export default function Touches (){
    
    let value=useSelector(state=>state.touche.value)

    /*
    const [values,setValues]=useState({
        state:value,
        prevState:value
    })
    */
    const [values,setValues]=useState(value)
    
   

    const dispatch=useDispatch()


    const useValueSelector=()=>{
        value=useSelector(state=>state.touche.value)
    }

    const increment=(e)=>{

        //why: recuperer l'ancien state et l'ajouter au nouveau
        /*
        setValues((prevState)=>{
           return { 
            state:prevState.state+value,
            prevState:prevState.state
           }
        })

        setValues(
            (prevState)=>{
                return{
                    state:value+prevState.prevState,
                    prevState:value
                }
            }
        )*/
        
        setValues(values+value)
    }
    
    
    const decrement=(e)=>{

        //why: recuperer l'ancien state et l'ajouter au nouveau
        setValues(prevState=>prevState-value)
    }

    const multiplication=(e)=>{

        //why: recuperer l'ancien state et l'ajouter au nouveau
        setValues(prevState=>prevState*value)
    }

    const division=(e)=>{

        //why: recuperer l'ancien state et l'ajouter au nouveau
        setValues(prevState=>prevState/value)
    }
 
    
    const result=(e)=>{

        console.log(values)
        //envoyer la valeur au magasin redux
        dispatch(setValue(values))
        
        /*
        setValues((prevState)=>{
            return{
                state:0,
                prevState:0
            }
        })*/
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
            <button onClick={decrement}>-</button>
            <button onClick={division}>/</button>
            <button onClick={multiplication}>*</button>
            <button onClick={result}>=</button>               
        </div>
    )
}