import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../requests/products_req';
import s from './index.module.css'
import { singleProductChangeStatusAction } from '../../store/reducers/singleProductReducer';
import { addProfuctToCartAction } from '../../store/reducers/cartReducer';

export default function SingleProductPage() {

  const { product_id } = useParams();

  let [count, setCount ] = useState(1);

  const incrCount = () => setCount(++count);
  const decrCount = () => {
    if(count > 1) {
      setCount(--count)
    }
  };

  const dispatch = useDispatch();

  const singleProductState = useSelector(store => store.singleProduct);

  console.log(singleProductState);
  

  useEffect(() => {
    dispatch(singleProductChangeStatusAction())
    dispatch(getSingleProduct(product_id))
  },[]);

  const { image, id, title, description, price, category } = singleProductState.data;


  

  return (
    <div>
      {
        singleProductState.status === 'loading'
        ? 'Product info is loading...'
        :    <div className={s.single_product}>
                <img src={image} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>{price}$</p>
                  <span>{category}</span>
                  <div>
                    <div onClick={decrCount}>-</div>
                    <p>{count}</p>
                    <div onClick={incrCount}>+</div>
                    <button onClick={() => dispatch(addProfuctToCartAction({id, image, title, price, count}))}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
      }
    </div>
  )
}
