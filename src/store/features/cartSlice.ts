import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { IProd } from "../../models"

export interface CartState {
    value: boolean,
    cartFilling:IProd[]
  }

  const  value= localStorage.getItem("cartFilling")

  const initialState: CartState = {

        value: false,
        cartFilling:value ? JSON.parse(value) : []
}

const setItem = <T>(item:T)=>{
    localStorage.setItem("cartFilling", JSON.stringify(item))
}
  
export const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        handleShow:(state,action:PayloadAction)=>{
            state.value = true
        },

        handleHide:(state,action:PayloadAction)=>{
            state.value = false
        },

        addToCart:(state,action:PayloadAction<IProd>)=>{
            state.cartFilling.push(action.payload)
            setItem(state.cartFilling)
        },

        delFromCart:(state,action:PayloadAction<IProd>)=>{
            state.cartFilling = state.cartFilling.filter((item)=>item.id !== action.payload.id)
            setItem(state.cartFilling)
        }
    }
})

export default CartSlice.reducer;
export const {handleShow, handleHide, addToCart, delFromCart} = CartSlice.actions



/* brand: action.payload.brand,
description:action.payload.description,
category:action.payload.category, 
discountPercentage:action.payload.discountPercentage,
images: action.payload.images,
id:action.payload.id,                      
rating:action.payload.rating,
stock:action.payload.stock,
thumbnail:action.payload.thumbnail,
title:action.payload.title,
price:action.payload.price,
             */