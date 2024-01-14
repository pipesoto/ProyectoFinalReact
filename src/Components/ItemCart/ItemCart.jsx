import React from 'react';
import { useCartContext } from '../Context/CartContext';
import '../ItemCart/ItemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className="cart-item">
        <img src={product.img} alt={product.title} className="cart-item-image" />
        <div className="cart-item-details">
          <p className="cart-item-title">Título: {product.title}</p>
          <p className="cart-item-title">Catidad: {product.quantity}</p>
          <p className="cart-item-price">Precio: {product.price}</p>
          <p className="cart-item-price">Subtotal: {product.quantity * product.price}</p>

          <button className="cart-item-remove" onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>    
    );
};

export default ItemCart;