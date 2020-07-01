import React, { useState } from "react";
import Detail from "./Detail";

function Product({ bike }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setIsChecked(!isChecked);   
  };

  return (
    <>
      <div className="product">
        <div className="product__info">
          <img
            className="product__info__image"
            src={bike.image}
            alt={bike.subtitle}
          />

          <div className="product__info__text">
            <div className="product__info__text__header">
              <h2>{bike.title}</h2>
            </div>
            <div className="product__info__text__size">
              Available size:
              {bike.size.map((size) => (
                <span key={size}> {size}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="product__detail" onClick={toggle}>
          <div className="product__detail__bg">
            <div className="product__detail__bg__inner"></div>
          </div>

          <div className="product__detail__info">
            <div className="product__detail__info__price">{bike.price}</div>
            <div className="product__detail__info__text">
              <h3>Detail</h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` ${isChecked ? "product__all show" : "product__all hide"}`}
      >
        <Detail bike={bike} toggle={toggle} />
      </div>
    </>
  );
}

export default Product;
