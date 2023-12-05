import React from 'react';
import {BsFillCartCheckFill} from 'react-icons/bs';
import '../../styles/styles.css';

const CardWidget = () => {
    return (
      <div className="card-widget-container">
        <button className="cart-button">
          <BsFillCartCheckFill className="cart-icon" />
        </button>
      </div>
    );
  };
export default CardWidget