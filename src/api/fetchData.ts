import axios from 'axios'
import { useEffect, useState } from 'react'
import { IData, IProd } from '../models'


export  function useFetchData() {
    const [prod, setProd]= useState<IData>()
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
