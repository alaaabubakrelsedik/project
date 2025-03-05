import React from 'react'
import "./Cart.css"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const Cart = () => {
    const data =[
        {

            id : 1,
            img : "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"long sleeves",
            desc:"long sleeves",
            isnew:false,
            price:19,
            newprice:12,
        },
        {

            id : 2,
            img : "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"long sleeves",
            desc:"long sleeves",
            isnew:false,
            price:19,
            newprice:12,
        }
    ]
  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {data?.map((item)=>(
            <div className='item' key={item.id}>
                <img src={item.img} alt="" />
                <hr/>
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price"> 1 * {item.price}</div>
                </div>
                < DeleteOutlinedIcon className='delete'/> 
            </div>
        ))} 
        <div className="total">
            <div>Subtotal</div>
            <div>123$</div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <div className='reset'>Reset cart</div>
    </div>
  )
}

export default Cart