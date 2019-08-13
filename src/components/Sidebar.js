import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__hero">
        <div className="sidebar__hero_item active">MEN</div>
        <div className="sidebar__hero_item">WOMEN</div>
        <div className="sidebar__hero_item">KIDS</div>
      </div>
      <div className="sidebar__options">
        <div className="sidebar__option">
          <div className="sidebar__option_title">Type</div>
          <div className="sidebar__option_item">Casual</div>
          <div className="sidebar__option_item">Training</div>
          <div className="sidebar__option_item">Running</div>
        </div>
        <div className="sidebar__option">
          <div className="sidebar__option_title">Size</div>
          <div className="sidebar__option_item">7 - 12</div>
        </div>
        <div className="sidebar__option">
          <div className="sidebar__option_title">Price</div>
          <div className="sidebar__option_item">120 - 170$</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
