import { useSelector } from "react-redux";

export default function ProductCardInPayment({ id }) {
  let currentProduct = {};
  let price = 0;
  let nbOfArticles = 0;
  const productData = useSelector((state) => state.allProduct);
  productData.products.forEach((element) => {
    if (element.id === id) {
      currentProduct = element;
    }
  });
  productData.cart.forEach((element) => {
    if (element.id === id) {
      price = currentProduct.price * element.count;
      nbOfArticles = element.count;
    }
  });

  return (
    <div>
      <div className="hr"></div>
      <div className="article">
        <div className="article-data">
          <h4>{currentProduct.title}</h4>
          <p>
            ${currentProduct.price} X {nbOfArticles} article
          </p>
        </div>
        <div className="article-price">{price.toFixed(2)}$</div>
      </div>
    </div>
  );
}
