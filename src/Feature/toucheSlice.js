import {createSlice} from '@reduxjs/toolkit'

import { createSelector } from 'reselect'


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
            },
            ADD_VALUE:(state,typeAction)=>{
                
                    state.value=state.value-typeAction.payload
                
            },
            retourneResult:(state)=>{
                return {...state}
            }
        },
        
    }
)

const selectTouche=(state)=>state.touche

export const selectStateValue=createSelector([selectTouche], (touche)=>touche.value)

//exporter les action
export const {setValue,add,ADD_VALUE,retourneResult,initialState}= toucheSlice.actions

//export les fonctions d'action
export default toucheSlice.reducer
