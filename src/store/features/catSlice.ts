import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

export interface CatState {
    value: string
  }
  
export const CatSlice = createSlice({
    name:"category",
    initialState:{
        value: "",
      },
    reducers:{
        addCat:(state,action:PayloadAction<{category:string}>)=>{
            state.value = action.payload.category
        }
    }
})

export default CatSlice.reducer;
export const {addCat} = CatSlice.actions