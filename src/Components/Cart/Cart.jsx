import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { getFirestore, collection,addDoc } from 'firebase/firestore';
import '../Cart/Cart.css';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const order = {

    buyer:{
      name:'Felipe',
      email:'fesotopedrero@gmail.com',
      phone:'+56974389896',
      address:'Magdalena 9797'
    
    },

    items: cart.map((product) =>({
      id:product.id,
      titel:product.title,
      price:product.price,
      quantity: product.quantity

    })),

    total:totalPrice(),

  };

  const handleClick = () =>{
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,order).then(({id}))
  }
  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <p className="empty-cart-text">No hay elementos en el carrito</p>
        <Link to="/" className="btn btn-primary">Hacer compras</Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="checkout-container">
      <p className="total-text">total: $ {totalPrice()}</p>
   
      <Link to="/checkout">
        {' '}
        <button  onClick={handleClick} className="btn-total">Finalizar Compra</button>
        
      </Link>
      </div>
    </>
  );
};

export default Cart;