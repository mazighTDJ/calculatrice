import {configureStore} from "@reduxjs/toolkit"
import toucheSlice from "./Feature/toucheSlice"
//import counterSlice from "./features/counter/counterSlice"

//creation du magasin redux
export default configureStore
(
    {
        reducer:{
           touche:toucheSlice
        }
    }
) 