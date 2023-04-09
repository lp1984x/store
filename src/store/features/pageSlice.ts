import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"


export interface PageState {
    current:number
  }

  export const PageSlice = createSlice({
    name:"cart",
    initialState:{
        current:1
    },
    reducers:{
        setCurrent:(state,action:PayloadAction<number>)=>{
            state.current = action.payload
        },

        
    }
  })
  export default PageSlice.reducer;
export const {setCurrent} = PageSlice.actions