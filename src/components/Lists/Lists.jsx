import React from 'react'
import Card from '../Card/Card'
import './Lists.css'
import usefetch from '../../hooks/Usefetch'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const Lists = ({catid,maxprice,sort,subcats}) => {

/*     const {data,loading,error} =usefetch(`/products?populate=*&filters[categories][id][$eq]=${catid}`)
 */                          
const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (()=>{
    const fetchdata = async()=>{
      try{
        const res = await axios.get(`http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]=${catid}`)
 
        console.log(res)
        setData(res.data.data)


      }catch(err){
        setError(err);
      }
      setLoading(false)

    }
fetchdata();
  },[catid])
  

     


  return (
    <div className='lists'>
        
         {loading? "loading "
         : data?.map(item=>(
         <Card  item={item} key={item.id}/>
        ))}
    

    </div>
  )
}

export default Lists