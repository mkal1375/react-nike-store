import React, { useState } from "react";

const CheckoutSidebar = props => {
  // TODO: add a real "form tag" for better semantic.
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    zipCode: "",
    address: ""
  });
  // const [errors, setErrors] = useState({
  //   name: [],
  //   phone: [],
  //   zipCode: [],
  //   address: []
  // });
  const { name, phone, zipCode, address } = orderDetails;

  // const orderDetailsIsValidate = () => {
  //   let hasNotError = true;
  //   // names can only contains alphabetical character.
  //   if (!name.match(/^[ a-zA-Z]+$/)) {
  //     console.log("checking name");
  //     hasNotError = false;
  //     setErrors({
  //       ...errors,
  //       name: [...errors.name, "Your Name must alphabetical"]
  //     });
  //   }
  //   // phone number can only contains numbers and +
  //   if (!phone.match(/^\+?(\d.*){3,}$/)) {
  //     console.log("checking phone");
  //     hasNotError = false;
  //     setErrors({
  //       ...errors,
  //       phone: [
  //         ...errors.phone,
  //         "Your Phone Number can only contains numbers and +"
  //       ]
  //     });
  //   }
  //   // zipCode validation (American/Canadian version)
  //   if (
  //     !zipCode.match(
  //       /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/
  //     )
  //   ) {
  //     console.log("checking zipcode");
  //     hasNotError = false;
  //     setErrors({
  //       ...errors,
  //       zipCode: ["Your zip code is wrong!"]
  //     });
  //   } else {
  //     setErrors({
  //       ...errors,
  //       zipCode: []
  //     });
  //   }
  //   // address must be longer than 10 character
  //   if (!(address.length > 10)) {
  //     console.log("checking address");
  //     hasNotError = false;
  //     setErrors({
  //       ...errors,
  //       address: ["Your address must be longer than 10 character"]
  //     });
  //   }
  //   return hasNotError;
  // };

  const submitOrder = event => {
    // TODO:
    // 1. validate input
    //submit order & show success message & clean order
    props.submitOrder(orderDetails);
    //clean form and states
  };
  const handleChange = event => {
    const title = event.target.name;
    const value = event.target.value;
    setOrderDetails({ ...orderDetails, [title]: value });
  };
  return (
    <div className="sidebar" style={{ paddingLeft: "1.5em" }}>
      <div>
        {props.orderState && (
          <div className="order_submitted">
            <h2 style={{ textAlign: "center" }}>Your order was submitted!</h2>
            <div>{name}</div>
            <div>{phone}</div>
            <div>{zipCode}</div>
            <div>{address}</div>
          </div>
        )}
        <div className="sidebar__hero">
          <div className="sidebar__option_title">Total:</div>
          <div className="sidebar__hero_item active">{props.total}$</div>
        </div>
        <div className="sidebar__options" style={{ marginTop: "1em" }}>
          <div className="sidebar__option">
            <div className="sidebar__option_title">Name</div>
            <input
              className="sidebar__option_item-small invisible-input"
              name="name"
              onBlur={handleChange}
            />
          </div>
          <div className="sidebar__option">
            <div className="sidebar__option_title">Phone</div>
            <input
              className="sidebar__option_item-small invisible-input"
              name="phone"
              onBlur={handleChange}
            />
          </div>
          <div className="sidebar__option">
            <div className="sidebar__option_title">Zip Code</div>
            <input
              className="sidebar__option_item-small invisible-input"
              name="zipCode"
              onBlur={handleChange}
            />
          </div>
          <div className="sidebar__option">
            <div className="sidebar__option_title">Address</div>
            <textarea
              className="sidebar__option_item-small invisible-input"
              name="address"
              onBlur={handleChange}
            />
          </div>
        </div>
      </div>
      <button className="checkout_button" onClick={submitOrder}>
        Checkout
      </button>
    </div>
  );
};

export default CheckoutSidebar;
