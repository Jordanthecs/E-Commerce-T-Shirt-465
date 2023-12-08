import React, {useState} from 'react';

const Product = ({ name, description, price, imageUrl, addToCart, cartItems }) => {

    const handleClick = () => {
        addToCart({ name, description, price });
        console.log(cartItems);
    };
  
    return (
    <div className="shop-product-card">
      <img src={imageUrl} alt={name} className="shop-product-image" />
      <div className="shop-product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <button class = "addToCart" onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
