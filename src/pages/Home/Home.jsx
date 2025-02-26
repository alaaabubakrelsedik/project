import React from 'react'
import Slider from '../../components/Slider/Slider'
import Featsuredproducts from '../../components/Featsuredproducts/Featsuredproducts'
import Categories from './../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
<div className="home">
  <Slider/>
  <Featsuredproducts type="featured"/>
  <Categories/> 
  <Featsuredproducts type="trending"/>
  <Contact/>
</div>  )
}

export default Home