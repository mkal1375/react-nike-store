import React from "react";

import SidebarLayout from "../components/SidebarLayout";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";

const Home = props => {
  return (
    <div className="page">
      <SidebarLayout config={{ size: 20, dir: "rtl" }}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <ProductGrid products={props.products} />
        </main>
      </SidebarLayout>
    </div>
  );
};

export default Home;
