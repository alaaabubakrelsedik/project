import React from 'react'

import "./Cart.css"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from 'react-redux';
import { removeitem } from '../../redux/cartreducer';
import { useDispatch } from 'react-redux';
import { resetcart } from '../../redux/cartreducer';
import { loadStripe } from '@stripe/stripe-js';
import { makerequest } from './../../makerequest';


 
const Cart = () => { 


    const products =useSelector(state=>state.cart.products)
    const dispatch = useDispatch();
  
    const totalprice = ()=>{
        let total =0
        products.forEach(item=>
            total+=item.quantity * item.price
        )
        return total.toFixed(2)
    }
     const stripePromise = loadStripe('pk_test_51R5Wcm2Nj28QjI8JmHg7aAV8ek8bHxslKF546pLs0ZhmygR9YueioyoK229F4DbgEz1NVQY7BJCO4zgFdMVS7Q1c00mCKtOTtA');

    const handlepayment = async () => {
        try {
           

            console.log('Starting payment process...');
            console.log('Products:', products);
            
            const stripe = await stripePromise;
            console.log('Stripe loaded:', stripe);
            
            const res = await makerequest.post("/orders", {
                products,
            });
            console.log('Backend response:', res.data);
            
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            });
        } catch (err) {
            console.error('Payment error:', err);
            console.error('Error details:', err.response?.data || err.message);
        }
    }

     
  return (
    <div className="cart">

        <h1>Products in your cart</h1>
        {products?.map((item)=>(
            <div className='item' key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price"> {item.quantity} * {item.price}</div>
                </div>
                < DeleteOutlinedIcon className='delete' onClick={()=>dispatch(removeitem(item.id))}/> 
            </div>
        ))} 
        <div className="total">
            <div>SUBTOTAL</div>
            <div>{totalprice()}</div>
        </div>
       <div className="father">
       <button onClick={handlepayment}>PROCEED TO CHECKOUT</button>
        <div className='reset' onClick={()=>dispatch(resetcart())}>RESET CART </div>
      
       </div>
       
    </div>
  )
}

export default Cart 

