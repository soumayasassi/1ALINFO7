import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice(
    { name : 'counter', 
    initialState : {value: 0}, 
    reducers : {
increment : (state)=>
{
    state.value +=1
},

decrement : (state)=>
{
    state.value -=1
},
incrementby : (state, action)=>
{
    state.value +=action.payload
},    //ici on va dvp increment decrement 
    }


    }
)
export const {increment ,  decrement , incrementby} = counterSlice.actions
export default counterSlice.reducer