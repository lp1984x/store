import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch} from 'react-redux';
import { CartSlice } from './features/cartSlice';
import { SortSlice } from './features/sortSlice'
import { SingleSlice } from './features/singleSlice';
import { PageSlice } from './features/pageSlice';
import { MdlSlice } from './features/mdlSlice';


export const store = configureStore({
  reducer: {
    cat:SortSlice.reducer,
    cart:CartSlice.reducer,
    single:SingleSlice.reducer,
    page:PageSlice.reducer,
    mdl:MdlSlice.reducer
    
  },
  
})


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;