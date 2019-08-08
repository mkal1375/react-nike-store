// React
import React, { useState, useEffect } from "react";
// components
import Header from "./components/Header";
import SidebarLayout from "./components/SidebarLayout";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
// Third-Party
import axios from "axios";
// styles
import "./assets/style/style.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    axios
      .get("https://json-server-now.mkal1375.now.sh/products")
      .then(({ data }) => {
        setDataFetched(true);
        setProducts(data.shoes);
      });
  }, []);
  return (
    <div className="app">
      <Header />
      <SidebarLayout>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <ProductGrid products={products} />
        </main>
      </SidebarLayout>
    </div>
  );
}

export default App;
