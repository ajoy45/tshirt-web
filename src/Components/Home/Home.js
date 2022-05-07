import React, { useState } from 'react';
import Carts from '../Carts/Carts';
import useTshirt from '../Hooks/useTshirt';
import Tshirt from '../Tshirt/Tshirt';
import'./Home.css'
const Home = () => {
    const [tshirts,setTshirt]=useTshirt();
    const[carts,setCarts]=useState([]);
    const handelAddToCart=(selectedItem)=>{
        const exists=carts.find(cart=>cart._id===selectedItem._id)
        if(!exists){
            const newCart=[...carts,selectedItem];
            setCarts(newCart);
        }else{
            alert('Already you added this')
        }
        
    }
    const removeFromCart=(SelectItem)=>{
        const rest=carts.filter(cart=>cart._id!==SelectItem._id);
        setCarts(rest)
    }
    
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt=><Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handelAddToCart={handelAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="selectitem-container">
                <h1>selected product</h1>
               <Carts
               carts={carts}
               setCarts={setCarts}
               removeFromCart={removeFromCart}
               ></Carts>
            </div>
        </div>
    );
};

export default Home;