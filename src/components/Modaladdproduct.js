import React, { Component } from "react";
import { connect } from "react-redux";
import { FormModal } from "./Styledmodal";

class Modaladdproduct extends Component {
  handleChange = e => {};
  render() {
    const { isOpen } = this.props;
    return (
      <div>
        {isOpen ? (
          <div className="form-popup">
            <FormModal className="modal-content">
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Title ..."
                className="form-control"
              />
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Price ..."
                className="form-control"
              />
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Stock ..."
                className="form-control"
              />
              <label>Select Picture of product</label>
              <input
                type="file"
                onChange={this.handleChange}
                className="form-control"
              />
              <button className="btn btn-success">Add</button>
            </FormModal>
          </div>
        ) : null}
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     currentTitle: state.currentTitle,
//     currentPrice: state.currentPrice,
//     currentStock: state.currentStock,
//     currentPic: state.currentPic
//   };
// };

export default connect()(Modaladdproduct);
