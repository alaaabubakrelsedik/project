import React from 'react'
import "./Featsuredproducts.css"
import Card from '../Card/Card'
const Featsuredproducts = ({type}) => {

    
const data =[{

    id : 1,
    img : "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2 : "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"long sleeves",
    isnew:false,
    oldprice:19,
    newprice:12,
},
{

    id : 2,
    img : "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2 : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"coat",
    isnew:true,
    oldprice:19,
    newprice:12,
},
{

    id : 3,
    img : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"skirt",
    isnew:true,
    oldprice:19,
    newprice:12,
},
{

    id : 4,
    img : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"hat",
    isnew:true,
    oldprice:19,
    newprice:12,
},
 
]

  return (
    <div className='featsuredproducts'>
        <div className="top">
            <h1>{type} product</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae tempora eligendi quos debitis doloribus
                 quibusdam similique! Architecto neque enim ipsam qm similique! Architecto neque enim i
                 psam qm similique! Architecto neque enim ipsam quos maiores?</p>
        </div>
        <div className="bottom">
            {data.map(item=>
                <Card item={item} key={item.id}/>
            )}

            
        </div>
    </div>
  )
}

export default Featsuredproducts