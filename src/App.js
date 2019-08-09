// React
import React, { useState, useEffect } from "react";
// components
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
// Third-Party
import axios from "axios";
import { Router } from "@reach/router";
// styles
import "./assets/style/style.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});

  useEffect(() => {
    // fetch products from server and load order from local storage.
    // this effect execute only once at beginning.
    axios
      .get("https://json-server-now.mkal1375.now.sh/products")
      .then(({ data }) => {
        // setDataFetched(true);
        setProducts(data.shoes);
        console.log("in");
      });
    setOrder(JSON.parse(localStorage.getItem("order")));
  }, []);

  useEffect(() => {
    // write order to locals storage on change
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);
  return (
    <div className="app">
      <Header />
      <Router id="fuckingStupidRouterDiv">
        <Home path="/" products={products} />
        <Product path="/products/:productId" products={products} />
      </Router>
    </div>
  );
}

export default App;
