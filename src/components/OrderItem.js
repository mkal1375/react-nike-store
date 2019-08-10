import React from "react";

import OrderItemQuantity from "./OrderItemQuantity";
import X from "../assets/feather/x.svg";

const OrderItem = props => {
  const product = props.product;
  const quantity = props.quantity;
  const size = props.size;

  return (
    <div
      className="checkout__order_item"
      key={`${product && product.id}/${size}`}
    >
      <div
        className="order__item_image"
        style={{
          background: `white url(${product &&
            product.images[0]}) no-repeat center / cover`
        }}
      />
      <div className="order__item_info">
        <div className="order__item_title">
          <span>{product && product.title}</span>
          <span className="order__item_size">(Size:{size})</span>
        </div>
        <div className="order__item_type">
          {product && product.age.toUpperCase()} | {product && product.type}
        </div>
      </div>
      <OrderItemQuantity quantity={quantity} />
      <div className="order__item_price">{product && product.price}$</div>
      <X className="order__item_delete" />
    </div>
  );
};

export default OrderItem;
