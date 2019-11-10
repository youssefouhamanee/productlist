import React, { Component } from 'react';
import {connect} from "react-redux"
import {deleteProduct,handleChange} from "./actions"

class CardProducts extends Component {


    handleDelete=(id)=>{
        let product = this.props.cart.find(cp=>cp.id === id)
        let removePoductFromCart= this.props.cart.filter(cp=> cp.id !== id)
        this.props.dispatch(deleteProduct(removePoductFromCart, product))
        
    }
   
   
    render() {
        const {cart} = this.props
        // console.log(this.props);
        
        return (
            <div>
               {
                   cart.length > 0  ?
                   
                   cart.map(pr=>
                        
                    <ul>
                        <li><b>Product:{pr.title} </b> | <input type="number" value={pr.total} onChange={(e)=>this.props.dispatch(handleChange(pr.id,e.target.value-pr.total))} /> | <b>{pr.price}*{pr.total} = {pr.price * pr.total}</b> | <button onClick={()=>this.handleDelete(pr.id)} >&times;</button> </li>
                    </ul>
                    )
                    :<p>No product added</p>
               }
            </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return {
        cart:state.cart.map(cp=>{
            let product = state.products.find(p=>p.id === cp.id)
            return {...product,...cp}
        })
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         deleteProduct: (id)=>{dispatch(deleteProduct(id))}
//     }
//   };

export default connect(mapStateToProps)(CardProducts);