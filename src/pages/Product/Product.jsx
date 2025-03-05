import React, { useState } from 'react'
import './Product.css'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {

  const [selectedimg,setselectedimg] =useState(0);
  const [quantity, setQuantity] = useState(0);
  const images =[
    "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
]
  return (
<div className="product">
  <div className="left ">
    <div className="images">
      <img src={images[0]} alt="" onClick={(e)=>setselectedimg(0)}/>
      <img src={images[1]} alt="" onClick={(e)=>setselectedimg(1)}/>
    </div>
    <div className="mainimg">
      <img src={images[selectedimg]} alt="" />
    </div>
  </div>


  <div className="right">
    <h1>Title</h1>
    <span className='price'>199$</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione repellat accusantium ipsa tempora non quibusdam, recusandae, nulla, aliquid possimus atque dignissimos dolor maxime quam odio blanditiis quod sint dolorem.</p>
    <div className="quantity">
      <button onClick={()=> setQuantity((prev)=> prev===1 ? 1 : prev- 1)}>-</button>
      {quantity }
      <button onClick={()=> setQuantity((prev)=>prev + 1)}>+</button>
    </div>
    <button className="add">
      <AddShoppingCartIcon/> ADD TO CART
    </button>
    <div className="links">
      <div className="item">
        <FavoriteBorderIcon/> ADD TO WISH LIST
      </div> 
      <div className="item"> 
        <BalanceIcon/> ADD TO COMPARE
      </div>     
    </div>

    <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>


  </div>
 

</div> 
 )
}

export default Product