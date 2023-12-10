import React, { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const ref = collection(firestore, 'Orders');

  const totalRef = useRef();
  const cartItemsRef = useRef();

  // Calculate total whenever cartItems change
  useEffect(() => {
    const calculatedTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(calculatedTotal);
  }, [cartItems]);

  const handleCheckout = (e) => {
    e.preventDefault();

    let data = {
      cartItems: cartItems,
      total: total,
    };

    console.log(data);

    try {
      addDoc(ref, data);
      navigate(`/checkout?total=${total}`);
    } catch (e) {
      console.log(e);
    }
    
  };

  return (
    <body>
      <div className="cart">
        <div className="cart-page-container">
          <h2 className="Cart-heading">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p className="Cart-desc">Shopping cart is empty</p>
          ) : (
            <div class="Total-Calc">
              {cartItems.map((item, index) => (
                <div key={index}>
                  <p class="co-p">
                    {item.name} - ${item.price}
                  </p>
                </div>
              ))}
              <p class="co-p">Total: ${total.toFixed(2)}</p>
              <div class="button-container">
                <button onClick={handleCheckout} class="checkout">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div class="footer">
        <footer>
          <div>
            {/* Footer content goes here */}
            <p class="copy">&copy; 2023 Your Website. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </body>
  );
};

export default Cart;
