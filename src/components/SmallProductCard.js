import { useDispatch, useSelector } from "react-redux";
import {
  editArticleInCartNumber,
  removeFromCart,
} from "../redux/actions/productActions";

export default function SmallProductCard({ id }) {
  const productData = useSelector((s) => s.allProduct);
  const dispatch = useDispatch();
  let currentProduct = {};
  let bnOfArticles = 0;
  productData.products.forEach((element) => {
    if (element.id === id) {
      currentProduct = element;
    }
  });
  productData.cart.forEach((element) => {
    if (element.id === id) {
      bnOfArticles = element.count;
    }
  });
  const add = () => {
    dispatch(editArticleInCartNumber(id, 1));
  };
  const sub = () => {
    dispatch(editArticleInCartNumber(id, -1));
  };
  const remove = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="smallProductCard">
      <img
        className="smallProductCard-image"
        src={currentProduct.image}
        alt=""
      />
      <div className="smallProductCard-title">
        <h2>{currentProduct.title}</h2>
        <p>{currentProduct.category}</p>
      </div>
      <div className="actions">
        <div className="smallProductCard-price">{currentProduct.price}$</div>
        <div className="smallProductCard-actions">
          <button onClick={add}>+</button>
          <p>{bnOfArticles}</p>
          <button onClick={sub}>-</button>
        </div>
        <button onClick={remove} className="smallProductCard-delete-btn">
          X
        </button>
      </div>
    </div>
  );
}
