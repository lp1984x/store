
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IProd} from '../models'
import { useAppSelector } from '../store/store'




export  function useFetchData() {
    const [prod, setProd]=useState<IProd[]>([])
    const [cat, setCat] = useState<string[]>([])

    const currentSort:string = useAppSelector((state) => state.cat.sortValue);
    

   axios.defaults.baseURL = 'https://dummyjson.com/products'
   axios.defaults.params = {limit: 0}
   

    
    useEffect(()=>{
        async function fetchProd() {
            try{
               
                const res = await axios.get(currentSort)
                setProd(res.data.products)
                
            }catch(err){
                if(axios.isAxiosError(err)){
                    console.log(err.response?.data.errText, 'error')
                } else if(err instanceof Error){console.log(err.message)}
            }
        }
        fetchProd()
    
    },[currentSort])

    async function fetchCat() {
        try{
           
            const res = await axios.get<[string]>("https://dummyjson.com/products/categories" )
            setCat(res.data)
            
            
        }catch(err){}
    }
    useEffect(()=>{
        fetchCat()
       
    },[])
   
return {cat, prod}
}
