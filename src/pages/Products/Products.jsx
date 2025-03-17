import { useParams } from 'react-router-dom'
import Lists from '../../components/Lists/Lists'
import './Products.css'
import usefetch from '../../hooks/Usefetch'
import { useState } from 'react';

const Products = () => {

  const catid = parseInt(useParams().id)
  const  [maxprice,setmaxprice]= useState(1000);
  const  [sort,setsort] = useState(null);
  const {data,loading,error} =usefetch(`/products?populate=*/subcategories?[filters][categories][id][$eq]=${catid}`)
/*   {مش فاهمه السطر اللي فوف ده} */  
  const [selectedsubcats,setSelectedsubcats ] = useState([])
  const handlechange = (e)=>{
    const value = e.target.value;
    const ischecked = e.target.checked;
    setSelectedsubcats (
      ischecked?[...selectedsubcats, value]: selectedsubcats.filter((item)=> item !==value)
    )

  }

console.log(selectedsubcats)
  return (
    <div className='products'>
      <div className="left">
        <div className="filteritem">
          <h2>product category</h2>


          {data?.map((item)=>(
            <div className="filteredoption" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handlechange}/>
            <label htmlFor="1">{item.title}</label>
        </div>
          ))}




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
          <div className="filteredoption">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e)=> setsort("asc")}/>
            <label htmlFor="asc">price (lowest first)</label>
          </div>
          <div className="filteredoption">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e)=> setsort("desc")} />
            <label htmlFor="desc">price (highest first)</label>
          </div>
        
         </div>
      </div>
      <div className="right">
        <img className='catimg' src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600' alt="" /> 
      <Lists catid={catid} maxprice={maxprice} sort={sort} subcats={selectedsubcats}/>
      </div>
    </div>
  )
}

export default Products