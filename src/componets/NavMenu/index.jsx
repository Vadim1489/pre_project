import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { useSelector } from 'react-redux'
import { IoCloseCircleOutline } from "react-icons/io5";
import { Context } from '../../context';


export default function NavMenu() {

  const { closeMenu , menuActive} = useContext(Context)

  const cartState = useSelector(store => store.cart);

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);

  const menuStyles = {
    display: menuActive ? 'flex' : 'none'
  }

  return (
    <div className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>
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
        <IoCloseCircleOutline onClick={closeMenu} />
    </div>
  )
}
