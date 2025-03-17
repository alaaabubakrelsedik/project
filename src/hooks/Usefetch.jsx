import { useState, useEffect } from 'react'; 

import { makerequest } from "../makerequest"

const usefetch = (url)=>{

    const [ data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect (()=>{
        const fetchdata = async()=>{
          try{
            setLoading(true)
            const res = await makerequest.get(url)
            console.log(res)
            setData(res.data.data)    
          }
          catch(err){
            setError(true)
          }
          setLoading(false)

        }
    fetchdata();
      },[url])
return {data,loading,error}
}

export default usefetch;