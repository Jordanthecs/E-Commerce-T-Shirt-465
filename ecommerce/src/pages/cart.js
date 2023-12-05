import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <div class = "cart-page-container">
        <h2 class = "Cart-heading">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p class = "Cart-desc">Shopping cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>{item.name} - ${item.price}</p>
              </div>
            ))}
            <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          </div>
        )}
      </div>  
    </div>
  );
};

export default Cart;
