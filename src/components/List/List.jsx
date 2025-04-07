import React from 'react'
import Card from '../Card/Card'
import './List.css'
import useFetch from '../../hooks/useFetch'

const List = ({subCats, maxPrice, sort}) => {
  // Get the current URL
  const currentUrl = window.location.href;
  console.log('Current URL:', currentUrl);

  // Start with the base URL
  let queryString = '/products' + currentUrl.split('/products')[1];
  
  // Add price filter if maxprice is defined
  if (maxPrice) {
    queryString += `&filters[price][$lte]=${parseInt(maxPrice)}`;
  }
  
  // Add sort if it's not null
  if (sort) {
    queryString += `&sort=price:${sort}`;
  }

  // Add subcategories filter if any are selected
  if (subCats && subCats.length > 0) {
    subCats.forEach((subCatId) => {
      queryString += `&filters[subcategories][id][$eq]=${subCatId}`;
    });
  }

  console.log('Final query string:', queryString);
  const {data, loading, error} = useFetch(queryString);

  return (
    <div className='lists'>
      {loading
        ? "loading"
        : error
          ? <div>Error: {error.message}</div>
          : data?.length === 0
            ? <div>No products found</div>
            : data?.map((item) => <Card item={item} key={item.id}/>)
      }
    </div>
  )
}

export default List
