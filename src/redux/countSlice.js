import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}
export const createCount=createSlice({
    name:"counts",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value+=1
        },
        decrement:(state,action)=>{
            state.value-=1
        },
        reset:(state,action)=>{
            return initialState
        }
    }
})
export const {increment,decrement,reset}=createCount.actions
export default createCount.reducer;