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
    img: "",
    error_title: "",
    error_price: "",
    error_remaining: "",
    error_img: ""
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
      img: this.state.img
    };
    if (product.title == "") {
      this.setState({
        error_title: "your title can't be empty"
      });
    } else if (product.title.length < 3) {
      this.setState({
        error_title: "your title can't be less than 6 characeter"
      });
    } else if (product.price == "") {
      this.setState({
        error_title: "",
        error_price: "your price can't be empty"
      });
    } else if (isNaN(product.price)) {
      this.setState({
        error_title: "",
        error_price: "your price should be a number !!"
      });
    } else if (product.remaining == "" || product.remaining == 0) {
      this.setState({
        error_price: "",
        error_remaining: "your remaining can't be empty or equal 0"
      });
    } else if (isNaN(product.remaining)) {
      this.setState({
        error_price: "",
        error_remaining: "your remaining should be a number !!"
      });
    } else if (product.img == "") {
      this.setState({
        error_remaining: "",
        error_img: "Select image of your product !!"
      });
    } else {
      this.setState({
        title: "",
        price: "",
        remaining: "",
        img: "",
        error_title: "",
        error_price: "",
        error_remaining: "",
        error_img: ""
      });

      this.props.openFormCart();
      this.props.NewProduct(product);
    }
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
                id="title"
                onChange={this.handleChange}
                placeholder="Title ..."
                className="form-control"
                value={this.state.title}
              />
              {this.state.error_title && (
                <p className="form__error">{this.state.error_title}</p>
              )}
              <input
                type="text"
                name="price"
                onChange={this.handleChange}
                placeholder="Price ..."
                className="form-control"
                value={this.state.price}
              />
              {this.state.error_price && (
                <p className="form__error">{this.state.error_price}</p>
              )}
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Remaining ..."
                name="remaining"
                className="form-control"
                value={this.state.remaining}
              />
              {this.state.error_remaining && (
                <p className="form__error">{this.state.error_remaining}</p>
              )}
              <input
                type="file"
                onChange={this.handleChange}
                name="img"
                className="form-control"
                value={this.state.image}
              />
              {this.state.error_img && (
                <p className="form__error">{this.state.error_img}</p>
              )}
              {/* <button onClick={() => this.fileInput.click()}>
                Upload image
              </button> */}
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
