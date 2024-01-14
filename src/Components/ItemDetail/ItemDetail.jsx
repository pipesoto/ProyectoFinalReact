import React, { useState } from "react";
import '../ItemDetail/itemDetail.css';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from '../Context/CartContext';


const ItemDetail = ({item}) => { 
    const [goToCart,setGoToCart] = useState(false);
    const {addProduct} = useCartContext()
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(item, quantity);
    }

    return (

        <div className="row justify-content-center">
            
                <div className="col-md-4 text-center">
                <img src={item.img}  className="img-fluid" alt={item.title} style={{ marginTop: '10px' }} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>$ {item.price}</p>
                <p>cantidad: {item.stock}</p>
                </div>
                <div className="ol-md-4 text-center">
                    {goToCart ? <Link to='/cart'>Terminar compra</Link> : <ItemCount stock={10} initial={1} onAdd={onAdd} />}
                </div>

               
        </div>
    )
}
export default ItemDetail