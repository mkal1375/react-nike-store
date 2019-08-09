import React, { useEffect } from "react";
import { Link } from "@reach/router";

const ProductGridProduct = props => {
  const firstImage = props.product.images[0];
  const productRef = React.createRef();
  useEffect(() => {
    productRef.current.style.background = `url(${firstImage}) no-repeat center`;
    productRef.current.style.backgroundSize = "cover";
  }, [productRef, firstImage]);
  return (
    <Link
      to={`products/${props.product.id}`}
      ref={productRef}
      className="product-grid__product"
    />
  );
};

export default ProductGridProduct;
