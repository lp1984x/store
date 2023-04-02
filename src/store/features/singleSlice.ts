import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { IProd } from "../../models"


export interface singleState {
    single: IProd   
}

export const SingleSlice = createSlice({
    name:"modal",
    initialState:{
        single:{
            brand: "",
            category:"", 
            description:0,
            discountPercentage:"",
            images: [""],
            id:0,                      
            rating:0,
            stock:"",
            thumbnail:"",
            title:"",
            price:0
        }
    },
    reducers:{

        singleData:(state,action:PayloadAction<IProd>)=>{
            state.single = action.payload
             
    }
}
})

export default SingleSlice.reducer;
export const {singleData} = SingleSlice.actions