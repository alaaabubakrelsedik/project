import React from 'react'
import "./Featsuredproducts.css"
import Card from '../Card/Card'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { set } from 'react-hook-form';
import useFetch from '../../hooks/useFetch.jsx'


const Featsuredproducts = ({type}) => {
  /* const {data,loading,error}=usefetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  ) */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (()=>{
    const fetchdata = async()=>{
      try{
       
        
        const res = await axios.get(
          process.env.REACT_APP_API_URL+`/products?populate=*&[filters][type][$eq]=${type}`,
          {
         headers:{
          Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
         } 
        })
        console.log('API Response:', res.data);
        setData(res.data.data)
      }
      catch(err){
        console.error('Error details:', err.response?.data || err.message);
        setError(err);
      }
      setLoading(false)
    }
fetchdata();
console.log(data)
  },[type])


  
 
  return (
    <div className='featsuredproducts '>


        <div className="top">
            <h1>{type} Product</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae tempora eligendi quos debitis doloribus
                 quibusdam similique! Architecto neque enim ipsam qm similique! Architecto neque enim i
                 psam qm similique! Architecto neque enim ipsam quos maiores?</p>
        </div>
        <div className="bottom">
            {  error? "something went wrong":
               loading? "loading":
               data.map(item=>
                <Card item={item} key={item.id}/>
            )}

            
        </div>
    </div>
  )
}

export default Featsuredproducts