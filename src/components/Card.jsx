import React from "react";
import mobileIMG from "../assets/images/mobile.jpg";
import desktopIMG from "../assets/images/desktop.jpg";
import iconCart from "../assets/images/icon-cart.svg";

function Card() {
  return (
    <>
      <div className="item image" role="image-container">
        <img
          src={mobileIMG}
          alt="product-image-mobile"
          className="mobile-img"
        />
        <img
          src={desktopIMG}
          alt="product-image-desktop"
          className="desktop-img"
        />
      </div>
      <div className="item text" role="text-container">
        <small>PERFUME</small>
        <h1 role="heading">Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <h2>
          $149.99<span>$169.99</span>
        </h2>
        <button role="submit button">
          <img src={iconCart} alt="icon-cart" />
          Add to Cart
        </button>
      </div>
    </>
  );
}
export default Card;
