import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"


export interface MdlState {
    show:boolean
  }

  export const MdlSlice = createSlice({
    name:"cart",
    initialState:{
        show:false
    },
    reducers:{
        handlShow:(state,action:PayloadAction)=>{
            state.show = true
        },
        handlClose:(state,action:PayloadAction)=>{
            state.show = false
        },

        
    }
  })
  export default MdlSlice.reducer;
export const {handlShow, handlClose} = MdlSlice.actions