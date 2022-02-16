import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SmallProductCard from "./SmallProductCard";
import { addToSubTotal } from "../redux/actions/productActions";

export default function CartListing() {
  const productData = useSelector((s) => s.allProduct);
  const dispatch = useDispatch();
  let subTotal = 0;
  productData.products.forEach((itemImStor) => {
    productData.cart.forEach((itemInCart) => {
      if (itemImStor.id === itemInCart.id) {
        subTotal += itemInCart.count * itemImStor.price;
      }
    });
  });
  useEffect(() => {
    dispatch(addToSubTotal(subTotal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subTotal]);
  const product_card = productData.cart.map((item) => (
    <SmallProductCard id={item.id} key={item.id} />
  ));

  return (
    <div className="ui container">
      <h1>Shopping Cart</h1>
      {product_card}
      <div className="shopping-cart-footer">
        <Link className="shopping-cart-footer__back" to="/">
          <i className="arrow circle left icon"></i> keep Shopping
        </Link>
        <div className="shopping-cart-footer_count">
          {" "}
          <span> Subtotal</span> {subTotal}$
        </div>
      </div>
      <div className="payment-section">
        <div className="payment-section__link">
          <Link to="/payment">pay now</Link>
        </div>
      </div>
    </div>
  );
}
