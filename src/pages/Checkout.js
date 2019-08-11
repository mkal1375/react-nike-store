import React, { useState, useEffect } from "react";

import SidebarLayout from "../components/SidebarLayout";

import OrderItem from "../components/OrderItem";
import CheckoutSidebar from "../components/CheckoutSidebar";

const orderToArray = order => {
  let out = [];
  for (let key in order) for (let size in order[key]) out.push([key, size]);
  return out;
};

const Checkout = props => {
  const [total, setTotal] = useState(0);
  const order = props.order;
  useEffect(() => {
    const _total = orderToArray(order).reduce((prev, [productId, size]) => {
      let productQuantity = order[productId][size];
      let product = props.products.find(
        product => product.id === Number(productId)
      );
      const orderItemSum = productQuantity * Number(product && product.price);
      return prev + orderItemSum;
    }, 0);
    setTotal(_total);
  }, [order, props.products]);
  return (
    <div className="checkout page inner-wrapper">
      <SidebarLayout config={{ size: 20, dir: "ltr" }}>
        <aside>
          <CheckoutSidebar total={total} />
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
