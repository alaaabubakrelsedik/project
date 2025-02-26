import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className='card'> 
      <div className="image">
        {item.isnew?(<span className='isnew'>New Season</span>):null}
        <img src={item.img} alt="" className='mainImg' />
        <img src={item.img2} alt="" className='secondImg' />
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>${item.oldprice}</h3>
        <h3>${item.newprice}</h3>
      </div>
      
      
        </div>
    </Link>
   )
}

export default Card