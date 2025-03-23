import React from "react";
import { productList } from "../fetch";

class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h3 className="title">
          {productList[1].title}
        </h3>
        <div className="price">
          price: {productList[1].price}
        </div>
        <div className="description">
          {productList[1].description}
        </div>
      </div>
    );
  }
}

export default Product