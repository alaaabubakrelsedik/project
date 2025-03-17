import React from 'react'
import "./Featsuredproducts.css"
import Card from '../Card/Card'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const Featsuredproducts = ({type}) => {

/* const {data,loading, error}= usefetch(`/products?populate=*&[filters][type][$eq]=${type}`)
 */ 

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (()=>{
    const fetchdata = async()=>{
      try{
        const res = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`)
        console.log(res)
        setData(res.data.data)


      }catch(err){
        setError(err);
      }
      setLoading(false)

    }
fetchdata();
  },[type])
    
// const data =[{

//     id : 1,
//     img : "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     img2 : "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title:"long sleeves",
//     isnew:false,
//     oldprice:19,
//     newprice:12,
// },
// {

//     id : 2,
//     img : "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     img2 : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title:"coat",
//     isnew:true,
//     oldprice:19,
//     newprice:12,
// },
// {

//     id : 3,
//     img : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title:"skirt",
//     isnew:true,
//     oldprice:19,
//     newprice:12,
// },
// {

//     id : 4,
//     img : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title:"hat",
//     isnew:true,
//     oldprice:19,
//     newprice:12,
// },
 
// ]

/* const [data, setData] = useState([]);
const fetchdata = async ()=>{
  try{
    const response = await axios.get("http://localhost:1337/api/products?populate=*");
    setData(response.data.data);


  } catch(err){
    console.log(err)
  }    
}

useEffect( ()=>{
  fetchdata();  
},[])
console.log(data);
 */

// const [products, setProducts] = useState([]);
// useEffect( ()=>{
// const fetchdata = async ()=>{
//   try{
//     const data = await LineAxisOutlined.get(process.env.REACT_APP_API_URL+"/products",
//         {
//           headers:{ Authorization:"bearer" + process.env.REACT_APP_API_TOKEN}
//   })      
// console.log(data)
//   }catch(err){
// console.log(err)
//   }
// }
// fetchdata();
// },[])

  return (
    <div className='featsuredproducts'>


        <div className="top">
            <h1>{type} product</h1>
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