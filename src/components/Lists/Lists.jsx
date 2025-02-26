import React from 'react'
import Card from '../Card/Card'
import './Lists.css'

const Lists = () => {

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

{

    id : 5,
    img : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"hat",
    isnew:true,
    oldprice:19,
    newprice:12,
},

{

    id : 6,
    img : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"hat",
    isnew:true,
    oldprice:19,
    newprice:12,
},


{

    id : 7,
    img : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"hat",
    isnew:true,
    oldprice:19,
    newprice:12,
},


{

    id : 8,
    img : "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"hat",
    isnew:true,
    oldprice:19,
    newprice:12,
},
 
]

  return (
    <div className='lists'> {data?.map(item=>(
            <Card  item={item} key={item.id}/>
        ))}
    

    </div>
  )
}

export default Lists