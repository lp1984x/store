import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch} from 'react-redux';
import { CartSlice } from './features/cartSlice';
import { CatSlice } from './features/catSlice'

export const store = configureStore({
  reducer: {
    cat:CatSlice.reducer,
    cart:CartSlice.reducer
    
  },
  
})


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;