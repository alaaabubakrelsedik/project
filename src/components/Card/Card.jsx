import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import axios from 'axios'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className='card'> 
      <div className="cardimage">
        {item.isnew &&<span className='isnew'>New Season</span>}
       <img src={`http://localhost:1337${item.img?.url}`} alt="Product" className='mainImg' />
       <img src={`http://localhost:1337${item.img2?.url}`} alt="Product" className='secondImg' />

        {/*  <img src={item.img?.url} alt="Product" className='mainImg' /> */}
        {/* الصورة مش شغاله */}
        {/* <img src={item.img2} alt="" className='secondImg' /> */}     
   </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>${item.oldprice || item.price + 20 }</h3>
        <h3>${item.price}</h3>
      </div>
      
      
        </div>
    </Link>
   )
}

export default Card