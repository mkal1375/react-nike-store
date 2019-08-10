import React from "react";

import { Link } from "@reach/router";

import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/feather/search.svg";
import ShoppingBagIcon from "../assets/feather/shopping-bag.svg";

const Header = props => {
  return (
    <header className="header inner-wrapper">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="header__options">
        <SearchIcon className="icon" />
        <Link to="checkout" onClick={props.fillOrderWithFakeData}>
          <ShoppingBagIcon className="icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
