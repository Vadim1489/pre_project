import React, { useContext } from 'react'
import NavMenu from '../NavMenu'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from '../../context';

export default function Header() {

  const { openMenu } = useContext(Context);

  return (
    <div className={s.header}>
        <Link to='/'>LOGO</Link>
        <NavMenu />
        <GiHamburgerMenu onClick={openMenu} />
    </div>
  )
}
