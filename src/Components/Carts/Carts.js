
import SelectItem from '../SelectItem/SelectItem';

const Carts = ({carts,removeFromCart}) => {
    
    let command;
    if(carts.length===0){
        command=<p>please add item!!!</p>
    }
    else if(carts.length===1){
        command=<p>Add more...</p>
    }else{
        command=<p>thanks for adding</p>
    }
    return (
        <div>
            
            {
                carts.map(cart=><SelectItem
                cart={cart}
                removeFromCart={removeFromCart}
                ></SelectItem>)
            }
            {carts.length===0||<h1>yes!you are buying</h1>}
             {carts.length===4?<button>welcome to ckeckout</button>:""} 
             {command} 
        </div>
    );
};

export default Carts;