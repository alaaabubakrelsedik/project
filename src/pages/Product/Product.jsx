import React, { useState } from 'react'
import './Product.css'
const Product = () => {

  const [selectedimg,setselectedimg] =useState(0)
  const images =[
  "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
]
  return (
<div className="product">
  <div className="left">
    <div className="images">
      <img src = {images[0] } alt="Thumbnail 1" onClick={e=>setselectedimg(0)}/>
      <img src = {images[1] } alt="Thumbnail 1" onClick={e=> setselectedimg(1)}/>
    </div>
    <div className="mainimg">
      <img src = {images[selectedimg] }/>

    </div>
  </div>
  <div className="right"></div>


</div> 
 )
}

export default Product