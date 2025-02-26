import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Lists from '../../components/Lists/Lists'
import './Products.css'

const Products = () => {

  const catid = parseInt(useParams().id)
  const  [maxprice,setmaxprice]= useState(1000);
  const  [sort,setsort] = useState(null)

  
  return (
    <div className='products'>
      <div className="left">
        <div className="filteritem">
          <h2>product category</h2>
          <input type="checkbox" id="1" value={1}/>
          <label htmlFor="1">shoes</label>
          <input type="checkbox" id="2" value={2}/>
          <label htmlFor="1">coats</label>
          <input type="checkbox" id="3" value={3}/>
          <label htmlFor="1">tops</label>
        </div>


        <div className="filteritem">
          <h2>filter by price</h2>
          <div className="inputitem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=> setmaxprice (e.target.value)} />
            <span>{maxprice}</span>
          </div>
        </div>
       
       
        <div className="filteritem">
          <h2>sort by</h2>
          <input type="radio" id="asc" value="asc" name="price" onChange={(e)=> setsort("asc")}/>
          <label htmlFor="asc">price (lowest first)</label>
          <input type="radio" id="desc" value="desc" name="price" onChange={(e)=> setsort("desc")} />
          <label htmlFor="desc">price (highest first)</label>
         </div>
      </div>
      <div className="right">
        <img className='catimg' src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600' alt="" /> 
      <Lists catid={catid} maxprice={maxprice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products