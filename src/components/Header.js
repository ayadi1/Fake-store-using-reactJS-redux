import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
export default function Header() {
  return (
    <div className="ui  menu  secondary">
      <div className="ui container center">
        <h2 className="item">
          <Link to="/">FakeShop</Link>
        </h2>
        <div className="right menu">
          <div className="item">
            <Link to='/cart'>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
