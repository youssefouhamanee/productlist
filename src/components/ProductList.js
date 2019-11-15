import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import {addToCart} from "../actions/actions"
import {  Div,
          Item,
          Cardsymb,
          Row,
          Col,
          Cardprice,
          H3,
          Buttonmodal,
          Notfound,
          Img
} from './Styled';
import BarShopping from './BarShopping'
import Searchproduct from "./Searchproduct";
class ProductList extends Component {



  getFilteredProducts = () => 
    this.props.products.filter(pr=>pr.title.toUpperCase().indexOf(this.props.search.toUpperCase())>-1)
  

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
    const {total} = this.props;
  const filteredProducts = this.getFilteredProducts()

    // console.log(products);
    return (
      <Fragment>
        
        <BarShopping />
        <Searchproduct />
        <Div>
       
          <Row>

            <Col>
            <H3 color="#9B481D"><i className="fa fa-tags"></i> Products</H3>
            {filteredProducts.length > 0 ?
              filteredProducts.map(product => (
                <Item>
                  <div key={product.id}>
                    
                    <h6>{product.title} <small>({product.remaining})</small></h6> 
                    <Img src={product.img} alt={product.img}/>
                    <p><Cardprice>{product.price}$</Cardprice></p>
                    <Cardsymb>
                    {product.remaining != 0 ? 
                      <i class="fa fa-plus" onClick={()=>this.handleAdd(product)}></i>: 
                      <i class="fa fa-ban"></i>}
                    </Cardsymb>
                    
                  </div>
                </Item>
                
              ))
              :<Notfound><h1>Ooops</h1><p>Product not found :( </p></Notfound>}
            </Col>
          </Row>
          
        </Div>
        <Buttonmodal onClick={()=>alert('this is modal')}><i className="fa fa-plus"></i></Buttonmodal>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    cart:state.cart,
    search:state.search
  }

};

const mapDispatchToProps = dispatch => {
  return {
    addToCart:(product)=>{dispatch(addToCart(product))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
