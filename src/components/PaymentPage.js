import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInPayment from "./ProductCardInPayment";
import { removeDataFromCartAndSubtotal } from "../redux/actions/productActions";
import CompleteAlert from "./CompleteAlert";
import { useState } from "react";
export default function PaymentPage() {
  // let [showAlert,setShowAlert]
  let [showAlert, setShowAlert] = useState(false);
  const productData = useSelector((state) => state.allProduct);
  const dispatch = useDispatch();
  const articles = productData.cart.map((item) => {
    return <ProductCardInPayment key={item.id} id={item.id} />;
  });

  const payAction = () => {
    setShowAlert(true);
    dispatch(removeDataFromCartAndSubtotal());
  };
  return (
    <div className="ui container">
      {showAlert && <CompleteAlert />}
      <div className="payment-main">
        <form className="payment-form">
          <h3>Enter your payment details</h3>
          <input placeholder="Card number" type="text" />
          <input placeholder="street address" />
          <input placeholder="Apt,unit,suite,etc . (optional)" />
          <select>
            <option>USA</option>
            <option>UK</option>
            <option>MOROCCO</option>
          </select>
          <div className="payment-form__address">
            <input placeholder="City" />
            <select>
              <option>Berkane</option>
              <option>Casa</option>
              <option>Oujda</option>
            </select>
            <input placeholder="Zip code" />
          </div>
        </form>
        <div className="payment-sub-total">
          <div className="articles">{articles}</div>
          <div className="hr"></div>
          <div className="sub-total">
            <div className="sub-total__info">
              <p>Subtotal</p>
              <p>${productData.subTotal.toFixed(2)}</p>
            </div>
            <div className="sub-total__action">
              <button onClick={payAction}>Pay New</button>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-footer">
        <Link to="/cart">
          <i className="arrow circle left icon"></i>
          back to cart
        </Link>
      </div>
    </div>
  );
}
