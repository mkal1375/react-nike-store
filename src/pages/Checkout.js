import React from "react";

import SidebarLayout from "../components/SidebarLayout";

import OrderItem from "../components/OrderItem";
import CheckoutSidebar from "../components/CheckoutSidebar";

const orderToArray = order => {
  let out = [];
  for (let key in order) for (let size in order[key]) out.push([key, size]);
  return out;
};

const Checkout = props => {
  const order = props.order;
  return (
    <div className="checkout page inner-wrapper">
      <SidebarLayout config={{ size: 20, dir: "ltr" }}>
        <aside>
          <CheckoutSidebar />
        </aside>
        <main>
          <div className="checkout__order">
            {orderToArray(order).map(([productId, size]) => {
              productId = Number(productId);
              const product = props.products.find(
                item => item.id === productId
              );
              return (
                <OrderItem
                  increaseOrderItemQuantity={props.increaseOrderItemQuantity}
                  decreaseOrderItemQuantity={props.decreaseOrderItemQuantity}
                  changeOrderItemQuantity={props.changeOrderItemQuantity}
                  removeFromOrder={props.removeFromOrder}
                  key={`${productId}/${size}`}
                  product={product}
                  size={size}
                  quantity={order[productId][size]}
                />
              );
            })}
          </div>
        </main>
      </SidebarLayout>
    </div>
  );
};

export default Checkout;
