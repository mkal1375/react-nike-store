import React, { useEffect } from "react";

const ProductGridProduct = props => {
  const firstImage = props.product.images[0];
  useEffect(() => {
    console.log(firstImage);
    productRef.current.style.background = `url(${firstImage}) no-repeat center`;
    productRef.current.style.backgroundSize = "cover";
  }, [firstImage]);
  const productRef = React.createRef();
  return <div ref={productRef} className="product-grid__product" />;
};

export default ProductGridProduct;
