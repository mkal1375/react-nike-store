import React from "react";

const CheckoutSidebar = () => {
  return (
    <div className="sidebar" style={{ paddingLeft: "1.5em" }}>
      <div className="sidebar__option_title">Total:</div>
      <div className="sidebar__hero">
        <div className="sidebar__hero_item">1200$</div>
      </div>
      <div className="sidebar__options" style={{ marginTop: "1em" }}>
        <div className="sidebar__option">
          <div className="sidebar__option_title">Name</div>
          <input
            className="sidebar__option_item-small invisible-input"
            defaultValue="Mahdi Kalhor"
          />
        </div>
        <div className="sidebar__option">
          <div className="sidebar__option_title">Phone</div>
          <input
            className="sidebar__option_item-small invisible-input"
            defaultValue="+989122348729"
          />
        </div>
        <div className="sidebar__option">
          <div className="sidebar__option_title">Zip Code</div>
          <input
            className="sidebar__option_item-small invisible-input"
            defaultValue="1717982374"
          />
        </div>
        <div className="sidebar__option">
          <div className="sidebar__option_title">Address</div>
          <textarea
            className="sidebar__option_item-small invisible-input"
            defaultValue="No.2 Poneh Alley, Motahrai street, Tehran, Iran"
          />
        </div>
      </div>
      <button className="checkout_button">Checkout</button>
    </div>
  );
};

export default CheckoutSidebar;
