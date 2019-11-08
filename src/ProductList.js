import React, { Component,Fragment } from "react";
import products from "./api/products";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {addToCart} from "./actions"
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
        <div style={{marginTop:30}}>
        <button style={{ backgroundColor:'green',color:'white',cursor:'pointer',border:'none'}} onClick={this.reloadPage}>Reload</button>
        <NavLink to="/productSelected" style={{ marginLeft: 300 }}>Cart({total})</NavLink>
        <table border="1" style={{marginTop:10,marginLeft:12}}>
        {products.length > 0 &&
          products.map(product => (
            <tr key={product.id}>
            
              <td>{product.title}</td>  
              <td>({product.remaining})</td>
              <td>{product.price} $ </td>
              <td>{product.remaining !== 0 ? <button onClick={()=>this.handleAdd(product)} >Add To Cart</button> : <button disabled>Add to cart</button> }</td>
            </tr>
          ))}
          </table>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    total : state.total
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
