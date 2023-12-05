import React, {useState} from 'react';
import Product from './product'; // Import the Product component

const Shop = () => {
  // Sample product data (replace this with your actual product data)
  const products = [
    {
      id: 1,
      name: 'Gaming Code T-Shirt',
      description: 'Comfortable cotton T-shirt',
      price: 19.99,
      imageUrl: 'code-shirt.jpeg',
    },
    {
      id: 2,
      name: 'Dad Code T-Shirt',
      description: 'Classic cotton T-shirt',
      price: 39.99,
      imageUrl: 'code2-shirts.jpeg',
    },
    {
      id: 3,
      name: 'Code T-Shirt',
      description: 'Coding Word cotton T-shirt',
      price: 59.99,
      imageUrl: 'code3-shirts.jpeg',
    },
    {
      id: 4,
      name: 'Code Writing T-Shirt',
      description: "Women's coding T-shirt",
      price: 69.99,
      imageUrl: 'women-code-shirt.png',
    },
    {
      id: 5,
      name: 'Code Sleep Repeat T-Shirt',
      description: 'Cool cotton T-shirt',
      price: 69.99,
      imageUrl: 'women-code-shirt2.jpg',
    },
    {
      id: 6,
      name: 'Clique Code Sweatshirt',
      description: 'Classic cotton sweatshirt',
      price: 79.99,
      imageUrl: 'women-code-shirt3.png',
    },
    {
      id: 7,
      name: 'Pizza Code T-shirt',
      description: 'Code Pizza cotton T-shirt',
      price: 89.99,
      imageUrl: 'coding-shirt7.jpg',
    },
    {
      id: 8,
      name: 'Binary T-shirt',
      description: 'Binary T-shirt',
      price: 79.99,
      imageUrl: 'binary.jpg',
    },
    // Add more product data as needed
  ];

  return (
    <div>
      <div className="shop">
        <h2 class = "shop-header">Shop</h2>
        <div className="shop-product-list">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
      <div class = "footer">
        <footer>
          <div>
            {/* Footer content goes here */}
            <p class = "copy">&copy; 2023 Your Website. All Rights Reserved.</p>
          </div>
    </footer>
        </div>
    </div>
  );
};

export default Shop;