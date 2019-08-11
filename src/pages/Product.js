import React, { useState } from "react";
import Slider from "../components/Slider";

const Product = props => {
  const [selectedSize, setSelectedSize] = useState(null);
  const product = props.products.find(
    item => item.id === Number(props.productId)
  );
  const handleSizeSelect = event => {
    const newSize = event.target.childNodes[0].nodeValue;
    setSelectedSize(newSize);
  };
  return (
    <div className="product page inner-wrapper">
      <Slider product={product} />
      <div className="product__content">
        <div className="product__info">
          <div className="product__type">
            {product && product.age.toUpperCase()} | {product && product.type}
          </div>
          <div className="product__price">{product && product.price}$</div>
        </div>
        <div className="product__title">{product && product.title}</div>
        <div className="product__description">
          {product && product.description}
        </div>
        <div className="product__select_size">
          <div className="product__size_title">Select Size</div>
          <div className="product__sizes" onClick={handleSizeSelect}>
            {product &&
              product.sizes.map(size => {
                const _className =
                  Number(selectedSize) === size
                    ? "product__size product__size-selected"
                    : "product__size";
                return (
                  <div className={_className} key={size}>
                    {size}
                  </div>
                );
              })}
          </div>
        </div>
        <button
          className="add-to-cart"
          onClick={() => {
            props.addToOrder(product.id, selectedSize);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
