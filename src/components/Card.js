import { Link } from "react-router-dom";
export default function Card(props) {
  const productLink = "/product/" + props.id;
  return (
    <Link role="div" to={productLink} className="card three wide column">
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <div className="header">{props.title}</div>
          <div className="meta">{props.price} $</div>
          <div className="description">{props.category}</div>
        </div>
        <div className="extra content">
          {/* <span className="right floated">Joined in 2013</span> */}
          <span>
            <i className="star outline icon yellow"></i>
            {props.rate}
          </span>
        </div>
    </Link>
  );
}
