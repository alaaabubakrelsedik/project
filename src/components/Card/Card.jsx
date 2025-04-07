import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import axios from 'axios'

const Card = ({item}) => {
 /*  console.log("UPLOAD URL:", process.env.REACT_APP_UPLOAD_URL);
  console.log("ENV VARIABLES:", process.env);
 */

  return (
    
    <Link to={`/product/${item.id}`}>
    <div className='card'> 
      <div className="cardimage">
        {item.isnew &&<span className='isnew'>New Season</span>}
        <img src={process.env.REACT_APP_UPLOAD_URL+item?.img?.url} alt="Product" className='mainImg' />
        <img src={process.env.REACT_APP_UPLOAD_URL+item?.img2?.url} alt="Product" className='secondImg' />
 
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