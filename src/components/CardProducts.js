import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteProduct, handleChangeValue } from "../actions/actions";
import { Div, Row, Input } from "./Styled";
import { Table, Td, Img, Span, I } from "./CardStyled";
import BarShopping from "./BarShopping";
import numeral from "numeral";

class CardProducts extends Component {
  handleDelete = id => {
    let product = this.props.cart.find(cp => cp.id === id);
    let removePoductFromCart = this.props.cart.filter(cp => cp.id !== id);
    this.props.deleteProductFromCart(removePoductFromCart, product);
  };

  render() {
    const { cart } = this.props;
    // console.log(this.props);
    return (
      <Fragment>
        <BarShopping />
        <Div>
          <Row>
            <Table>
              {cart.length > 0 ? (
                cart.map(pr => (
                  <tbody>
                    <tr key={pr.id}>
                      <Td>
                        <Img src={pr.img} alt={pr.img} />
                      </Td>
                      <Td>
                        {pr.title}
                        <p>
                          <Span className="price">
                            {numeral(pr.price).format("$0,0.00")}$
                          </Span>
                        </p>
                      </Td>
                      <Td>
                        <Input
                          type="number"
                          value={pr.total}
                          onChange={e =>
                            this.props.handleValue(
                              e.target.value - pr.total,
                              pr.id
                            )
                          }
                        />
                      </Td>
                      <Td>{(pr.price * pr.total).toFixed(2)}$</Td>
                      <Td>
                        <I
                          className="fa fa-trash fa-lg"
                          onClick={() => this.handleDelete(pr.id)}
                        ></I>
                      </Td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <tr className="center">
                  <Td className="card-empty">
                    Your Shopping Cart is empty ¯\_(ツ)_/¯ !!
                  </Td>
                </tr>
              )}
            </Table>
          </Row>
        </Div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.map(cp => {
      let product = state.products.find(p => p.id === cp.id);
      return { ...product, ...cp };
    })
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleValue: (v, i) => {
      dispatch(handleChangeValue(v, i));
    },
    deleteProductFromCart: (productInList, product) => {
      dispatch(deleteProduct(productInList, product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardProducts);
