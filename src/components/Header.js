import React from "react";

import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/feather/search.svg";
import ShoppingBagIcon from "../assets/feather/shopping-bag.svg";

const Header = () => {
  return (
    <header className="header inner-wrapper">
      <Logo className="logo" />
      <div className="header__options">
        <SearchIcon className="icon" />
        <ShoppingBagIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
