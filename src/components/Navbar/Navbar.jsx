import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';



const Navbar = () => {
const[open,setOpen]= useState(false)

  return (
<div className='navbar'> 
    <div className="wrapper">
      <div className="left"> 
         <div className="item"> 
          <TourOutlinedIcon/>
             <ExpandMoreIcon/>
         </div>     
      </div>


        <div className="center"> </div>
        <div className="right"> 
        
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
            </div>
          </div>
          
        </div>
{open && <Cart/>}
    </div>
    
  );
}


export default Navbar;
