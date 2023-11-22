import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
  return (
    <body>
        <div class = "banner">
            <h1 class = "welcome" >Welcome To</h1>
            <h1 class = "welcome2">Computer Code Wars</h1>
        </div>
        <div class = "sale-carousel">
            <div class = "wlabel">
                <h6 class = "c-subtitle">Men's</h6>
                <h5 class = "c-heading">Sale</h5>
            </div>
            <div class  = "cc-carousel">
    <Slider {...settings}>
      <div>
        <div className="product-card">
          <div className="product-image">
            <img className="prod-img" src="code-shirt.jpeg" alt="Shirt" />
          </div>
          <div className="prod-details">
            <h4>Shirt</h4>
            <p>Black</p>
            <p>S/M/L/XL</p>
            <b>$60</b>
          </div>
        </div>
      </div>
      <div>
        <div className="product-card">
          <div className="product-image">
            <img className="prod-img" src="code2-shirts.jpeg" alt="Shirt" />
          </div>
          <div className="prod-details">
            <h4>Shirt</h4>
            <p>Black</p>
            <p>S/M/L/XL</p>
            <b>$60</b>
          </div>
        </div>
      </div>
      <div>
        <div className="product-card">
          <div className="product-image">
            <img className="prod-img" src="code3-shirts.jpeg" alt="Shirt" />
          </div>
          <div className="prod-details">
            <h4>Shirt</h4>
            <p>Black</p>
            <p>S/M/L/XL</p>
            <b>$60</b>
          </div>
        </div>
      </div>
      </Slider>
      </div>
        </div>
        <div class = "sale-carousel">
            <div class = "wlabel">
                <h6 class = "c-subtitle">Women's</h6>
                <h5 class = "c-heading">Sale</h5>
            </div>
            <div class  = "cc-carousel">
    <Slider {...settings}>
      <div>
        <div className="product-card">
          <div className="product-image">
            <img className="prod-img" src="code-shirt.jpeg" alt="Shirt" />
          </div>
          <div className="prod-details">
            <h4>Shirt</h4>
            <p>Black</p>
            <p>S/M/L/XL</p>
            <b>$60</b>
          </div>
        </div>
      </div>
      <div>
        <div className="product-card">
          <div className="product-image">
            <img className="prod-img" src="code2-shirts.jpeg" alt="Shirt" />
          </div>
          <div className="prod-details">
            <h4>Shirt</h4>
            <p>Black</p>
            <p>S/M/L/XL</p>
            <b>$60</b>
          </div>
        </div>
      </div>
      <div>
        <div className="product-card">
          <div className="product-image">
            <img className="prod-img" src="code3-shirts.jpeg" alt="Shirt" />
          </div>
          <div className="prod-details">
            <h4>Shirt</h4>
            <p>Black</p>
            <p>S/M/L/XL</p>
            <b>$60</b>
          </div>
        </div>
      </div>
      </Slider>
      </div>
        </div>
    </body>
  );
}
export default Home;