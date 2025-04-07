import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'
import useFetch from '../../hooks/useFetch'

const Categories = () => {
  const { data: categories, loading, error } = useFetch('/categories?populate=*');
  console.log('Categories from API:', categories);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories: {error.message}</div>;


 
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className='link' to="/products?populate=*&filters[categories][id][$eq]=2">Women</Link>
          </button>
        </div>
        <div className="row">
          <img src=" https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600
" alt="" />
          <button>
            <Link className='link' to="/products?populate=*&filters[categories][id][$eq]=4">Men</Link>
          </button>
        </div>
      </div>


      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className='link' to="/products?populate=*&filters[categories][id][$eq]=10">Accessories</Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className='link' to="/products?populate=*&filters[categories][id][$eq]=8">Bags</Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className='link' to="/products?populate=*&filters[categories][id][$eq]=6">Shoes</Link>
          </button>
        </div>
      </div>
     
     



    </div>
  );
};

export default Categories;