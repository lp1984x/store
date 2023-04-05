import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"


export interface CatState {
    catValue: string,
  }

  const  catStore = localStorage.getItem("catValue")
 

const setItem = <T>(item:T)=>{
    localStorage.setItem("catValue", JSON.stringify(item))
}

  
export const CatSlice = createSlice({
    name:"category",
    initialState:{
        catValue: catStore ? JSON.parse(catStore) : "",
      },
    reducers:{
        addCat:(state,action:PayloadAction<{category:string}>)=>{
            state.catValue = action.payload.category
            setItem(state.catValue)
        }
    }
})

export default CatSlice.reducer;
export const { addCat } = CatSlice.actions