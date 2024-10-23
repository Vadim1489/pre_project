import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { useSelector } from 'react-redux'

export default function NavMenu() {

  const cartState = useSelector(store => store.cart);

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);

  return (
    <div className={s.nav_menu}>
        <Link to={'/'}>Main</Link>
        <Link to={'/categories'}>Categories</Link>
        <Link to={'/all_products'}>All Products</Link>
        <Link to={'/cart'}>
          Cart
          {
            cartState.length === 0
            ? ''
            : <span>{totalCount}</span>
          }
          
        </Link>
    </div>
  )
}
