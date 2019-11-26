import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addToCart, openModal, createNewProduct } from "../actions/actions";
import {
  Div,
  Item,
  Cardsymb,
  Row,
  Col,
  Cardprice,
  H3,
  Buttonmodal,
  Notfound,
  Img
} from "./Styled";
import BarShopping from "./BarShopping";
import Searchproduct from "./Searchproduct";
import Modaladdproduct from "./Modaladdproduct";
import numeral from "numeral";
class ProductList extends Component {
  getFilteredProducts = () =>
    this.props.products.filter(
      pr => pr.title.toUpperCase().indexOf(this.props.search.toUpperCase()) > -1
    );

  handleAdd = product => {
    // console.log('product', product)
    let newproduct = this.props.products.find(pr => pr.id === product.id);
    // console.log('new product',newproduct)
    this.props.addToCart(newproduct);
  };

  openFormCart = () => {
    this.props.openFormModal(this.props.isOpen);
  };

  NewProduct = product => {
    let products = [...this.props.products, product];
    this.props.createNewProduct(products);
  };

  render() {
    const { isOpen } = this.props;
    const filteredProducts = this.getFilteredProducts();
    console.log(filteredProducts);

    // console.log(products);
    return (
      <Fragment>
        <BarShopping />
        <Searchproduct />
        <Div>
          <Row>
            <Col>
              <H3 color="#9B481D">
                <i className="fa fa-tags"></i> Products
              </H3>
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <Item className="animation-col">
                    <div key={product.id}>
                      <h6>
                        {product.title} <small>({product.remaining})</small>
                      </h6>
                      <Img src={product.img} alt={product.img} />
                      <p>
                        <Cardprice>
                          {numeral(product.price).format("$0,0.00")}
                        </Cardprice>
                      </p>
                      <Cardsymb>
                        {product.remaining !== 0 ? (
                          <i
                            className="fa fa-plus"
                            onClick={() => this.handleAdd(product)}
                          ></i>
                        ) : (
                          <i className="fa fa-ban"></i>
                        )}
                      </Cardsymb>
                    </div>
                  </Item>
                ))
              ) : (
                <Notfound>
                  <h1>Ooops</h1>
                  <p>Product not found :( </p>
                </Notfound>
              )}
            </Col>
          </Row>
        </Div>
        <Buttonmodal onClick={() => this.openFormCart()}>
          <i className={!isOpen ? "fa fa-plus" : "fa fa-times"}></i>
        </Buttonmodal>
        <Modaladdproduct
          NewProduct={this.NewProduct}
          isOpen={this.props.isOpen}
          openFormCart={this.openFormCart}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    search: state.search,
    isOpen: state.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    },
    openFormModal: modal => {
      dispatch(openModal(modal));
    },
    createNewProduct: product => {
      dispatch(createNewProduct(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
