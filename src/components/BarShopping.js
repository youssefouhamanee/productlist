import React, { Component } from "react";
import { Navbar, Ul, Li, Span, Small } from "./NavbarCss";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class BarShopping extends Component {
  render() {
    const { total } = this.props;
    return (
      <div>
        <Navbar>
          <Ul>
            <Li>
              <NavLink to="/" className="brand">
                Shopping Cart
              </NavLink>
            </Li>
          </Ul>
          <Span>
            <NavLink className="NavLink" to="/cart">
              <i className="fa fa-shopping-cart fa-lg"></i>
            </NavLink>
            <Small>{total}</Small>
          </Span>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    total: state.cart.reduce((res, cp) => res + cp.total, 0)
  };
};

export default connect(mapStateToProps)(BarShopping);
