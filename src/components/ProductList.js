import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import {addToCart} from "../actions/actions"
import { Table,
          Th,
          Td,
          Span,
          Div,
          Item,
          Cardsymb,
          Row,
          Col,
          Cardprice
} from './Styled';
import BarShopping from './BarShopping'
class ProductList extends Component {
  handleAdd=(product)=>{
    // console.log('product', product)
    let newproduct = this.props.products.find(pr=>pr.id === product.id ) 
    // console.log('new product',newproduct)
    
     this.props.addToCart(newproduct)
  }
  reloadPage=()=>{
    window.location.reload();
  }
  render() {
    const { products,total} = this.props;
    // console.log(products);
    return (
      <Fragment>
        <BarShopping />
        <Div>
       
          <Row>
            <Col>
            {products.length > 0 &&
              products.map(product => (
                <Item>
                  <div key={product.id}>
    
                    <h6>{product.title} <small>({product.remaining})</small></h6> 
                    <img src={product.img} width="50" height="50" />
                    <p><Cardprice>{product.price}$</Cardprice><Cardsymb>
                    {product.remaining != 0 ? 
                      <span onClick={()=>this.handleAdd(product)} >
                      <i class="fa fa-plus"></i></span> : 
                      <span ><i class="fa fa-ban"></i></span> }
                    </Cardsymb></p>
                    
                  </div>
                </Item>
                
              ))}
            </Col>
          </Row>
          
        </Div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    total:state.cart.reduce((res,cp)=>res+cp.total,0)
  }

};

const mapDispatchToProps = dispatch => {
  return {
    addToCart:(id)=>{dispatch(addToCart(id))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
