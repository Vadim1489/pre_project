import React, { useEffect } from 'react'
import CartContainer from '../../componets/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartAction } from '../../store/reducers/cartReducer';
import OrderForm from '../../componets/OrderForm';

export default function CartPage() {

  const dispatch = useDispatch();

  const cartState = useSelector(store => store.cart);

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);
  const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);
  
  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartState))
  }, [cartState]);


  return (
    <div>
      <h2>Cart</h2>
      {
        cartState.length === 0
        ? 'Your cart is empty...'
        :<div>
            <CartContainer cartState={cartState} />
            <div onClick={() => dispatch(clearCartAction())}>Clear cart</div>
            <p>Items count: {totalCount}</p>
            <p>Total price: {totalSum}$</p>
            <OrderForm />
          </div>
      }
 
    </div>
  )
}
