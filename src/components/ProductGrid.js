import React from "react";

import ProductGridProduct from "./ProductGridProduct";

const ProductGrid = props => {
  return (
    <div className="product-grid">
      {props.products.map(product => {
        return <ProductGridProduct key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
