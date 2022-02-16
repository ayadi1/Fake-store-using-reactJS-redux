import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import Card from "./Card";
export default function ProductComponents() {
  const products = useSelector((state) => state.allProduct.products);
  let productList = [];
  productList = products.map((item) => {
    return (
      <Card
        id={item.id}
        key={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        category={item.category}
        rate={item.rating.rate}
      />
    );
  });
  return (
    <>
      {products.length <= 0 ? (
        <Spinner />
      ) : (
        <div className="ui grid link cards ">{productList}</div>
      )}
    </>
  );
}
