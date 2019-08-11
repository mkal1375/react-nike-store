// React
import React, { useState, useEffect } from "react";
// components
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
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
      });
    setOrder(JSON.parse(localStorage.getItem("order")));
  }, []);

  useEffect(() => {
    // write order to locals storage on change
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  const addToOrder = (id, size) => {
    const newOrder = { ...order };
    if (id in newOrder) {
      const currentQuantity = order[id][size] || 0;
      newOrder[id][size] = currentQuantity + 1;
    } else {
      newOrder[id] = { [size]: 1 };
    }
    setOrder(newOrder);
  };

  // const fillOrderWithFakeData = () => {
  //   setOrder({
  //     4: {
  //       12: 2
  //     },
  //     2: {
  //       7: 1,
  //       12: 1
  //     },
  //     3: {
  //       7: 1
  //     },
  //     6: {
  //       7: 1,
  //       12: 1
  //     }
  //   });
  // };
  return (
    <div className="app">
      <Header />
      <Router id="fuckingStupidRouterDiv">
        <Home path="/" products={products} />
        <Product
          addToOrder={addToOrder}
          path="/products/:productId"
          products={products}
        />
        <Checkout path="/checkout" order={order} products={products} />
      </Router>
    </div>
  );
}

export default App;
