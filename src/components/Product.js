import React from "react";
import { productList } from "../fetch";

class Product extends React.Component {
  render(props) {
    return(
      <div className="product">
        <h3 className="title">
          {productList[this.props.id].title}
        </h3>
        <div className="price">
          price: {productList[this.props.id].price}
        </div>
        <div className="description">
          {productList[this.props.id].description}
        </div>
      </div>
    );
  }
}

export default Product