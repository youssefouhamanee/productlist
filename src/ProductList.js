import React, { Component } from "react";
import products from "./api/products";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <ul>
        <a style={{ marginLeft: 320 }}>Cart(0)</a>
        {products.length > 0 &&
          products.map(product => (
            <li key={product.id}>
              <b>Product :</b> {product.title} ({product.remaining})
              <b>Price :</b> {product.price}
              <button onClick={ () => this.addToCart(product.id)}>Add To Cart</button>
            </li>
          ))}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  }

};

const mapDispatchToProps = (state, action) => {
  return "lhi";
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
