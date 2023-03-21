import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { IData, IProd} from '../models'




export  function useFetchData() {
    const [prod, setProd]=useState<IProd[]>([])
    /* const [data, setData]= useState<IData>({
        limit:0,
        products: [],
        skip: 0,
        total: 0
    }) */
    const [cat, setCat] = useState<[string]>([""])
    const [loading, setLoading] = useState(false)
    

   axios.defaults.baseURL = 'https://dummyjson.com/products'
   axios.defaults.params = {limit: 0}
   

    async function fetchProd() {
        try{
            setLoading(true)
            const res = await axios.get<IData>("/")
            setProd(res.data.products)
            setLoading(false)
        }catch(err){
            if(axios.isAxiosError(err)){
                console.log(err.response?.data.errText, 'error')
            } else if(err instanceof Error){console.log(err.message)}
        }
    }
    useEffect(()=>{
        fetchProd()
    },[])

    async function fetchCat() {
        try{
            setLoading(true)
            const res = await axios.get<[string]>("https://dummyjson.com/products/categories" )
            setCat(res.data)
            setLoading(false)
            
        }catch(err){}
    }
    useEffect(()=>{
        fetchCat()
       
    },[])
   
return {cat, prod, loading, setProd}
}
