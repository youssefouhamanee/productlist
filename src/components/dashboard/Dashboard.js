import React, { Component } from "react";
import { Table, Container, Row, Img } from "./Styleddashboard";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { products } = this.props;
    return (
      <Container>
        <Row>
          <Table>
            <tr>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>REMAINING</th>
              <th>ACTIONS</th>
            </tr>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <Img src={product.img} />
                </td>
                <td>{product.title}</td>
                <td>{product.price}$</td>
                <td>{product.remaining}</td>
                <td>
                  <i className="fa fa-pencil fa-lg"></i>
                  <i className="fa fa-trash fa-lg"></i>
                </td>
              </tr>
            ))}
          </Table>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
};
export default connect(mapStateToProps)(Dashboard);
