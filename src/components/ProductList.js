import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import {addToCart, openModal} from "../actions/actions"
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
import Modaladdproduct from "./Modaladdproduct";
class ProductList extends Component {



  getFilteredProducts = () => 
    this.props.products.filter(pr=>pr.title.toUpperCase().indexOf(this.props.search.toUpperCase())>-1)
  

  handleAdd=(product)=>{
    // console.log('product', product)
    let newproduct = this.props.products.find(pr=>pr.id === product.id ) 
        // console.log('new product',newproduct)
     this.props.addToCart(newproduct,this.props.state)
  }
  reloadPage=()=>{
    window.location.reload();
  }
  openFormCart=()=>{
    this.props.openFormModal(this.props.isOpen)
  }
  render() {
    const {total,isOpen} = this.props;
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
        <Buttonmodal onClick={()=>this.openFormCart()}><i className="fa fa-plus"></i></Buttonmodal>
        <Modaladdproduct isOpen={this.props.isOpen} />
        
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    state:state,
    search:state.search,
    isOpen:state.isOpen
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart:(product,state)=>{dispatch(addToCart(product,state))},
    openFormModal:(modal)=>{dispatch(openModal(modal))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
