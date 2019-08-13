import React, { useState, useEffect } from "react";

import OrderItem from "../components/OrderItem";
import CheckoutSidebar from "../components/CheckoutSidebar";
import SidebarLayout from "../components/SidebarLayout";

import { Link } from "@reach/router";

const orderToArray = order => {
  let out = [];
  for (let key in order) for (let size in order[key]) out.push([key, size]);
  return out;
};

const Checkout = props => {
  const [total, setTotal] = useState(0);
  const [orderState, setOrderState] = useState(false);
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

  const submitOrder = orderDetails => {
    // send data to server. we just log it
    console.log(orderDetails);
    props.cleanOrder();
    // show success ot fail message
    setOrderState(true);
  };

  return (
    <>
      <div className="checkout page inner-wrapper">
        <SidebarLayout config={{ size: 20, dir: "ltr" }}>
          <aside>
            <CheckoutSidebar
              total={total}
              orderState={orderState}
              submitOrder={submitOrder}
            />
          </aside>
          <main>
            <div className="checkout__order">
              {order && Object.entries(order).length !== 0 ? (
                orderToArray(order).map(([productId, size]) => {
                  productId = Number(productId);
                  const product = props.products.find(
                    item => item.id === productId
                  );
                  return (
                    <OrderItem
                      increaseOrderItemQuantity={
                        props.increaseOrderItemQuantity
                      }
                      decreaseOrderItemQuantity={
                        props.decreaseOrderItemQuantity
                      }
                      changeOrderItemQuantity={props.changeOrderItemQuantity}
                      removeFromOrder={props.removeFromOrder}
                      key={`${productId}/${size}`}
                      product={product}
                      size={size}
                      quantity={order[productId][size]}
                    />
                  );
                })
              ) : (
                <div className="empty_cart">
                  <h1>There are no items in your cart.</h1>
                  <Link to="/" className="empty_cart__link">
                    Back To Store
                  </Link>
                </div>
              )}
            </div>
          </main>
        </SidebarLayout>
      </div>
    </>
  );
};

export default Checkout;
