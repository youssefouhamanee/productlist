import React, { Component } from "react";
import { connect } from "react-redux";
import { FormModal } from "./Styledmodal";
import PropTypes from "prop-types";
import { createNewProduct } from "../actions/actions";
import uuidv4 from "uuid/v4";

class Modaladdproduct extends Component {
  state = {
    title: "",
    price: "",
    remaining: "",
    image: ""
  };
  handleChange = e => {
    // console.log(
    //   "Name field",
    //   e.target.name + " - " + "value field",
    //   e.target.value
    // );

    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addNewProductFromModal = e => {
    e.preventDefault();
    let product = {
      id: uuidv4(),
      title: this.state.title,
      price: this.state.price,
      remaining: this.state.remaining,
      image: this.state.image
    };
    this.setState({
      title: "",
      price: "",
      remaining: "",
      image: ""
    });
    this.props.openFormCart();
    this.props.NewProduct(product);
  };
  render() {
    // console.log(this.state);
    const { isOpen, NewProduct } = this.props;
    return (
      <div>
        {isOpen ? (
          <div className="form-popup">
            <FormModal
              onSubmit={this.addNewProductFromModal}
              className="modal-content"
            >
              <input
                type="text"
                name="title"
                onChange={this.handleChange}
                placeholder="Title ..."
                className="form-control"
                value={this.state.title}
              />
              <input
                type="text"
                name="price"
                onChange={this.handleChange}
                placeholder="Price ..."
                className="form-control"
                value={this.state.price}
              />
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Remaining ..."
                name="remaining"
                className="form-control"
                value={this.state.remaining}
              />
              <label>Select Picture of product</label>
              <input
                type="file"
                onChange={this.handleChange}
                name="image"
                className="form-control"
                value={this.state.image}
              />
              <button className="btn btn-success">Add</button>
            </FormModal>
          </div>
        ) : null}
      </div>
    );
  }
}
Modaladdproduct.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};
export default connect()(Modaladdproduct);
