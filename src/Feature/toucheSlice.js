import {createSlice} from '@reduxjs/toolkit'


//creation de la slice 
//name
//initialState
//reducers
export const toucheSlice = createSlice
(
    {
        name: "touche",
        initialState:{
            value:0
        },
        reducers:{
            setValue:(state,typeAction)=>{
                    state.value=typeAction.payload
            },
            add:(state,typeAction)=>{
                return{
                    value:state.value+typeAction.payload
                }
            }
        }
    }
)

//exporter les action
export const {setValue,add}= toucheSlice.actions

//export les fonctions d'action
export default toucheSlice.reducer
