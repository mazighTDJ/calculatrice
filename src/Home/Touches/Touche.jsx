
import './touche.css'
import { useDispatch} from 'react-redux'
import { ADD_VALUE } from '../../Feature/toucheSlice'



export default function Touche({nom,typeAction}){
    const dispatch=useDispatch()

    return(
        <button className='Touche' onClick={()=>dispatch(ADD_VALUE())} >
            <span className='nom'>
                {nom}
            </span>
        </button>
    )
}