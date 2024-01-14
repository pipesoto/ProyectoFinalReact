import React from 'react';
import {useCartContext} from '../Context/CartContext';
import {BsFillCartCheckFill} from 'react-icons/bs';
import '../../styles/styles.css';

const CartWidget = () => {
  const {totalProducts, cart} = useCartContext();
    return (
      <div className="card-widget-container">
        <button className="cart-button">
          <BsFillCartCheckFill className="cart-icon" />
          <span className=" top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.75rem', padding: '0.2rem 0.4rem' }}>{totalProducts() ||cart}</span>
        </button>
      </div>
    );
  };
export default CartWidget