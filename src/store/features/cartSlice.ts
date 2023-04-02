import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { IProd } from "../../models"

export interface CartState {
    value: boolean,
    cartFilling:IProd[],
    totalPrice:number
  }

  const  cartFillingStorage = localStorage.getItem("cartFilling")
  const  totalPrice = localStorage.getItem("totalPrice")

  const initialState: CartState = {

    value: false,
    cartFilling:cartFillingStorage ? JSON.parse(cartFillingStorage) : [],
    totalPrice:totalPrice ? JSON.parse(totalPrice) : 0
}

const setItem = <T>(item:T)=>{
    localStorage.setItem("cartFilling", JSON.stringify(item))
}

const setPrice = <T>(price:T)=>{
    localStorage.setItem("totalPrice", JSON.stringify(price))
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
            const itemIndex = state.cartFilling.findIndex(item => item.id === action.payload.id)
            const tempProduct = {...action.payload, cartQuantity:1, tempPrice: action.payload.price}

            if (itemIndex >= 0){
                // @ts-ignore
                state.cartFilling[itemIndex].cartQuantity++
                // @ts-ignore
                state.cartFilling[itemIndex].tempPrice += action.payload.price
                state.totalPrice += action.payload.price
                setItem(state.cartFilling)
                setPrice(state.totalPrice)

            }else{
                // @ts-ignore
                state.cartFilling.push(tempProduct)
                state.totalPrice += action.payload.price
                setItem(state.cartFilling)
                setPrice(state.totalPrice)
            }
            
        },

        delFromCart:(state,action:PayloadAction<IProd>)=>{
            state.cartFilling = state.cartFilling.filter((item)=>item.id !== action.payload.id)
            state.totalPrice -= action.payload.price
            setItem(state.cartFilling)
            setPrice(state.totalPrice)
            
        },

        incrementQuantity:(state, action:PayloadAction<IProd>)=>{
            const itemIndex =  state.cartFilling.findIndex(item => item.id === action.payload.id)
             // @ts-ignore
             if (state.cartFilling[itemIndex].cartQuantity >= 1){
                // @ts-ignore
                state.cartFilling[itemIndex].cartQuantity++
                // @ts-ignore
                state.cartFilling[itemIndex].tempPrice += action.payload.price
                state.totalPrice += action.payload.price
                }
                setItem(state.cartFilling)
                setPrice(state.totalPrice)
            },

        decrementQuantity:(state, action:PayloadAction<IProd>)=>{
            const itemIndex =  state.cartFilling.findIndex(item => item.id === action.payload.id)
            // @ts-ignore
            if (state.cartFilling[itemIndex].cartQuantity >= 2){
                // @ts-ignore
                state.cartFilling[itemIndex].cartQuantity--
                // @ts-ignore
                state.cartFilling[itemIndex].tempPrice -= action.payload.price
                state.totalPrice -= action.payload.price
                }
                setItem(state.cartFilling)
                setPrice(state.totalPrice)
        },
    }
  })


  export default CartSlice.reducer;
export const {handleShow, handleHide, addToCart, delFromCart,incrementQuantity,decrementQuantity} = CartSlice.actions