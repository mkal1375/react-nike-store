import React, { useState } from "react";

import RightArrow from "../assets/feather/chevron-right.svg";
import LeftArrow from "../assets/feather/chevron-left.svg";

const OrderItemQuantity = props => {
  // this state maybe will be useful when we want expend this form features.
  const [itemQuantity, setItemQuantity] = useState(Number(props.quantity));
  const changeQuantity = event => {
    const input = event.target.value;
    if (input > 0) setItemQuantity(Number(input));
  };
  return (
    <div className="order__item_quantity">
      <button className="invisible">
        <LeftArrow
          className="order__item_quantity_arrow"
          onClick={() => {
            if (itemQuantity - 1 > 0) {
              setItemQuantity(itemQuantity - 1);
              props.decreaseOrderItemQuantity(props.productId, props.size);
            }
          }}
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
          onClick={() => {
            setItemQuantity(itemQuantity + 1);
            props.increaseOrderItemQuantity(props.productId, props.size);
          }}
        />
      </button>
    </div>
  );
};

export default OrderItemQuantity;
