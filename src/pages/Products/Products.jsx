import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Products.css";
import List from "../../components/List/List";
import { useLocation } from 'react-router-dom';  // Import useLocation


const Products = () => {
  
  const { id } = useParams();
  const catid = id ? parseInt(id) : null;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  
  const { data, loading, error } = useFetch(
    `/subcategories?populate=*`
  ); 

 

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    
    setSelectedSubCats(prev => {
      if (checked) {
        // Add the subcategory if it's not already selected
        return [...prev, value];
      } else {
        // Remove the subcategory if it's unchecked
        return prev.filter(id => id !== value);
      }
    });
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {loading ? (
            <div>Loading categories...</div>
          ) : error ? (
            <div>Error loading categories: {error.message}</div>
          ) : data && data.length > 0 ? (
            data.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id.toString()}
                  checked={selectedSubCats.includes(item.id.toString())}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.title}</label>
              </div>
            ))
          ) : (
            <div>No categories found</div>
          )}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
/*               value={maxPrice}
 */              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              checked={sort === "asc"}
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              checked={sort === "desc"}
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catimg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catid={catid} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

export default Products;