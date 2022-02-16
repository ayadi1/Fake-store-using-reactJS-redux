import React from "react";
import { useSelector } from "react-redux";
export default function ShoppingCart() {
  let nbOfItems = 0;
  const cartItems = useSelector((state) => state.allProduct.cart);
  cartItems.forEach((element) => {
    nbOfItems += element.count;
  });
  return (
    <div className="main-shopping-cart">
      <i className="shopping cart big icon"></i>

      {nbOfItems > 0 && (
        <span>
          <div className="ui red circular label">{nbOfItems}</div>
        </span>
      )}
    </div>
  );
}
