import React, { Component } from "react";
import { Div, Row } from "./Styled";
import { Input } from "./SearchStyled";
import { connect } from "react-redux";
import { handleSearchProduct } from "../actions/actions";

class Searchproduct extends Component {
  handleSearch = e => {
    return this.props.handleSearch(e.target.value);
  };
  render() {
    return (
      <Div>
        <Row>
          <Input
            type="text"
            name="search"
            value={this.props.search}
            onChange={e => this.handleSearch(e)}
            placeholder="Search ..."
          />
        </Row>
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleSearch: search => {
      dispatch(handleSearchProduct(search));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchproduct);
