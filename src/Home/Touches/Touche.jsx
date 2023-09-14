
import './touche.css'
import { useDispatch, useSelector} from 'react-redux'
import { setValue } from '../../Feature/toucheSlice'



export default function Touche({nom,typeAction}){
    const dispatch=useDispatch()
   
   

    return(
        <button className='Touche' onClick={()=>dispatch(setValue(typeAction))} >
            <span className='nom'>
                {nom}
            </span>
        </button>
    )
}