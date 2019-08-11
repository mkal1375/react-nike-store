import React, { useState } from "react";

import RightArrow from "../assets/feather/chevron-right.svg";
import LeftArrow from "../assets/feather/chevron-left.svg";

const OrderItemQuantity = props => {
  const [itemQuantity, setItemQuantity] = useState(props.quantity);
  const changeQuantity = event => {
    setItemQuantity(event.target.value);
  };
  return (
    <div className="order__item_quantity">
      <button className="invisible">
        <LeftArrow
          className="order__item_quantity_arrow"
          onClick={() =>
            props.decreaseOrderItemQuantity(props.productId, props.size)
          }
        />
      </button>
      <input
        type="number"
        className="order__item_quantity_input invisible-input"
        value={itemQuantity}
        onChange={changeQuantity}
        onBlur={() =>
          props.changeOrderItemQuantity(
            props.productId,
            props.size,
            itemQuantity
          )
        }
      />
      <button className="invisible">
        <RightArrow
          className="order__item_quantity_arrow"
          onClick={() =>
            props.increaseOrderItemQuantity(props.productId, props.size)
          }
        />
      </button>
    </div>
  );
};

export default OrderItemQuantity;
