import axios from 'axios'
import { useEffect, useState } from 'react'
import { IData } from '../models'


export  function useFetchData() {
    const [prod, setProd]= useState<IData>({
        limit: 0,
        products: [],
        skip: 0,
        total: 0
    })
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        try{
            setLoading(true)
            const res = await axios.get<IData>('https://dummyjson.com/products?limit=10')
            setProd(res.data)
            setLoading(false)
        }catch(err){}
    }
    useEffect(()=>{
        fetchData()
    },[])
return {prod, loading}
}
