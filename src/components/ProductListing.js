import { useDispatch } from "react-redux";
import ProductComponents from "./ProductComponents";
import axios from "axios";
import { useEffect } from "react";
import * as actions from "../redux/actions/productActions";
export default function ProductListing() {
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/")
      .catch((err) => console.log(err));
    dispatch(actions.setProducts(response.data));
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
}
