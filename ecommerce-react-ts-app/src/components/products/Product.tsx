import { Fragment } from "react";
import type { ProductType } from "./Products.type";
function Product(props: ProductType) {
  return (
    <Fragment>
      <li>{props.title}</li>
      <li>
        <p>{props.description}</p>
      </li>
      <li>
        <img src={props.images[0]} />
      </li>
      <li>{props.category.name}</li>
    </Fragment>
  );
}

export default Product;
