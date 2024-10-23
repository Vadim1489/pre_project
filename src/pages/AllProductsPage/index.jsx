import React, { useEffect } from 'react'
import ProductsContainer from '../../componets/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products_req';
 
export default function AllProductsPage() {

  const dispatch = useDispatch();

  const allProductsState = useSelector(store => store.allProducts);

  useEffect(() => dispatch(getAllProducts), []);
 
  return (
    <div>
      <h3>All products:</h3>
      <ProductsContainer products={allProductsState} />
    </div>
  )
}
