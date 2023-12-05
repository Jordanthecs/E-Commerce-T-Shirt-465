import React, {useState} from 'react';

const Product = ({ name, description, price, imageUrl, addToCart }) => {

    const handleClick = () => {
        addToCart({ name, price });
    };
  
    return (
    <div className="shop-product-card">
      <img src={imageUrl} alt={name} className="shop-product-image" />
      <div className="shop-product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
