/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  addToCart,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import Loader from "./Loader";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProduct.selectedProduct);
  const { id } = useParams();
  const getData = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products//${id}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    getData();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  const addToCartHandler = async () => {
    dispatch(addToCart(product.id));
  };
  return (
    <>
      {product ? (
        <main className="ui container main">
          <div className="ui segment">
            <div className="ui two column very relaxed stackable grid">
              <div className="column">
                <img
                  className="main-image"
                  alt={product.title}
                  src={product.image}
                />
              </div>
              <div className="aligned column">
                <h1 className="main-title">{product.title}</h1>
                <div className="ui teal tag huge label">{product.price}$</div>
                <div className="ui raised segment">
                  <div className="ui red ribbon label">{product.category}</div>
                  <span>product Details</span>
                  <p>{product.description}</p>
                </div>
                <div
                  onClick={addToCartHandler}
                  className="add-card-btn ui inverted huge red button"
                >
                  add to card
                </div>
              </div>
            </div>
            <div className="ui vertical divider">and</div>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}
