import React from 'react';
import './SelectItem.css'
const SelectItem = ({cart,removeFromCart}) => {
    const{name,price}=cart;
    return (
        <div className='selected-item'>
            <h1>{name}</h1>
            <p>${price}</p>
            <button onClick={()=>removeFromCart(cart)} >Delete</button>
        </div>
    );
};

export default SelectItem;