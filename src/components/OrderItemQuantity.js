import React, { useState } from "react";

import RightArrow from "../assets/feather/chevron-right.svg";
import LeftArrow from "../assets/feather/chevron-left.svg";

const OrderItemQuantity = props => {
  // this is a mock!! quantity increment and decrement must handle with a function in app component and value
  const [quantity, setQuantity] = useState(props.quantity);
  const increment = () => {
    console.log("increment");
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    console.log("decrement");
    setQuantity(quantity - 1);
  };
  return (
    <div className="order__item_quantity">
      <button className="invisible">
        <LeftArrow className="order__item_quantity_arrow" onClick={decrement} />
      </button>
      <input
        type="number"
        className="order__item_quantity_input invisible-input"
        value={quantity}
      />
      <button className="invisible">
        <RightArrow
          className="order__item_quantity_arrow"
          onClick={increment}
        />
      </button>
    </div>
  );
};

export default OrderItemQuantity;
