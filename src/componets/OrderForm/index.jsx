import React from 'react'
import { useSelector } from 'react-redux';

export default function OrderForm() {

    const cartState = useSelector(store => store.cart);
    const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);


    const sendOrder = e => {
        
        e.preventDefault();

        const { name, phone, email } = e.target;

        const newOrder = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            total: totalSum ,
            cart: cartState
        }

        console.log(newOrder);
        

        e.target.reset()
    }

  return (
    <div>
        <form onSubmit={sendOrder}>
            <input type='text' placeholder='Name' name='name' />
            <input type='number' placeholder='Phone number' name='phone' />
            <input type='text' placeholder='Email' name='email' />
            <button>Order</button>
        </form>
    </div>
  )
}
