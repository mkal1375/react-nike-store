import React, { useEffect } from "react";

const Product = props => {
  const productSlide = React.createRef();
  const product = props.products.find(
    item => item.id === Number(props.productId)
  );
  useEffect(() => {
    // product &&
    //   product.images.forEach(image => {
    //     productSlide.current.style.background = `url(${image}) no-repeat center`;
    //     productSlide.current.style.backgroundSize = "cover";
    //   });
    const firstImage = product && product.images[0];
    productSlide.current.style.background = `url(${firstImage}) no-repeat center`;
    productSlide.current.style.backgroundSize = "cover";

    console.log(product);
  }, [product, productSlide]);
  return (
    <div className="product page inner-wrapper">
      <div className="product__slider">
        {/* {product &&
          product.images.map(image => {
            return (
              <div
                key={product.id}
                ref={productSlide}
                className="product__slide"
              />
            );
          })} */}
        <div className="product__slide" ref={productSlide} />
      </div>
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
          <div className="product__sizes">
            {product &&
              product.sizes.map(size => (
                <div className="product__size">{size}</div>
              ))}
          </div>
        </div>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
