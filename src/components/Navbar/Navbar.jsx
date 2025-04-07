import React from 'react';
import "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
 

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  // Calculate total quantity of items in cart
  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="navbar">
          <div className="wrapper">
              <div className="left">
<div className="item">
    <img src="/img/en.png" alt="" />
    <KeyboardArrowDownIcon />
</div>
<div className="item">
    <span>USD</span>
    <KeyboardArrowDownIcon />
</div>
<div className="item">
  <Link className="link" to="/products?populate=*&filters[categories][id][$eq]=2">Women</Link>
</div>
<div className="item">
  <Link className="link" to="/products?populate=*&filters[categories][id][$eq]=4">Men</Link>
</div>
<div className="item">
  <Link className="link" to="/products?populate=*&filters[categories][id][$eq]=10">Accessories</Link>
</div>
<div className="item">
  <Link className="link" to="/products?populate=*&filters[categories][id][$eq]=8">Bags</Link>
</div>
<div className="item">
  <Link className="link" to="/products?populate=*&filters[categories][id][$eq]=6">Shoes</Link>
</div>

              </div>
              <div className="center">
                <Link className="link" to="/">  LAMASTORE</Link>
              </div>
              <div className="right">
                  <div className="item">
                    <Link className="link" to="/">  Home</Link>
                  </div>
                  <div className="item">
                    <Link className="link" to="/">  About</Link>
                  </div>
                  <div className="item">
                    <Link className="link" to="/">  Contact</Link>
                  </div>
                  <div className="item">
                    <Link className="link" to="/">  Stores</Link>
                  </div>

                      <div className="icons">
                        
                        <button className="" onClick={() => navigate('/register')}>
                        Register
                        </button>
                        <button className="" onClick={() => navigate('/login')}>
                        Login
                        </button>
                            <div className="carticon" onClick={()=>setOpen(!open)}>
                              <ShoppingCartOutlinedIcon/>
                              <span>{totalQuantity}</span>
                            </div>
                      </div>


              </div>
          </div>
          {open && <Cart/>}
          </div>

    
  );
}


export default Navbar;
