import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';


export default function CartItem({id, image, title, price, count}) {

    const dispatch = useDispatch();

    return (
        <div className={s.card}>
            <img src={image} alt={title} />
            <p>{ title }</p>
            <p>{ price }$</p>
            <div>
                <div onClick={()=> dispatch(decrementCountAction(id))}>
                    -
                </div>
                <p>{ count }</p>
                <div onClick={()=> dispatch(incrementCountAction(id))}>
                    +
                </div>
            </div>
            
            <IoIosCloseCircleOutline onClick={() => dispatch(deleteProductFromCartAction(id))} />
        </div>
      )
}
