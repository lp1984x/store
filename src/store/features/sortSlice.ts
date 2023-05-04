import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"


export interface SortState {
    sortValue: string,
  }

const  sortStore = localStorage.getItem("sortValue")
 

const setItem = <T>(item:T)=>{
    localStorage.setItem("sortValue", JSON.stringify(item))
}

  
export const SortSlice = createSlice({
    name:"Sort",
    initialState:{
        sortValue: sortStore ? JSON.parse(sortStore) : "",
      },
    reducers:{
        sort:(state,action:PayloadAction<string>)=>{
            state.sortValue = action.payload
            setItem(state.sortValue)
        }
    }
})

export default SortSlice.reducer;
export const { sort } = SortSlice.actions