import React, {useEffect, useState} from "react";
import '../ItemCount/ItemCount.css';


const ItemCount = ({initial, stock, onAdd}) =>  {
    const [count, setCount] = useState(parseInt(initial));
    const decrease = () =>{
        setCount(count -1);
    };
    const increase = () =>{
        setCount(count +1);
    };
    useEffect(() =>{
        setCount(parseInt(initial));
    },[initial]);
    
    return (
        <div className="counter">
         <div className="button-container">  
            <button disabled={count <=1} onClick={decrease} className="operacion">
                -
            </button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase} className="operacion">
                +
            </button>
         </div>
         <div className="agregar-carrito-container">
            <button disabled={stock <= 0} onClick={() => onAdd(count)} className="operacion agregar-carrito">
                Agregar al carrito
            </button>
            </div>
        </div>
    );
};
export default ItemCount;