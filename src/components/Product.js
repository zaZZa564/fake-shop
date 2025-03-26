import React from "react";
import { productList } from "../fetch";
import '../style/product.css';

class Product extends React.Component {
  render(props) {
    return(
      <div className="product">
        <div className="product-img"></div>
        <div className="title">
          <strong>
            {productList[this.props.id].title}
          </strong>
        </div>
        <div className="price">
          price: {productList[this.props.id].price}$
        </div>
        {/* <div className="description">
          {productList[this.props.id].description}
        </div> */}
      </div>
    );
  }
}

export default Product