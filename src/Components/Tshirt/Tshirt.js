import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handelAddToCart}) => {
    const{name,price,picture}=tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt=''></img>
            <h1>{name}</h1>
            <p>Price:${price}</p>
            <button onClick={()=>handelAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;