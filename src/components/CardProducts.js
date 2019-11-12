import React, { Component,Fragment } from 'react';
import {connect} from "react-redux"
import {deleteProduct,handleChangeValue} from "../actions/actions"
import { Div,
         Row, 
         Col, 
         Ul, 
         Li ,
         Input} from './Styled';
import BarShopping from './BarShopping';

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
        <Fragment>
            <BarShopping />
            <Div>
            
                <Row>
                    
                    {
                        cart.length > 0  ?
                        
                        cart.map(pr=>
                             
                             
                         <Ul>
                             <Li key={pr.id}>
                                 <div><img width="100" hieght="100" src={pr.img} alt={pr.img}/><p>
                                 {pr.title} 
                                 <Input type="number" value={pr.total} 
                                 onChange={(e)=>this.props.dispatch(handleChangeValue(pr.id,e.target.value-pr.total))} /> 
                                 <b>{pr.price * pr.total} $</b> 
                                 <button 
                                 onClick={()=>this.handleDelete(pr.id)} >
                                 &times;</button> 
                                 </p>
                                 </div>
                             </Li>
                        </Ul>
                         )
                         :<Ul className="center">
                            <Li>Your Shopping Cart is empty</Li>
                         </Ul>
                    }
                   
                </Row>
            </Div>
            </Fragment>
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
//         handleDelete: ({v,t})=>{dispatch(deleteProduct({v,t}))}
//     }
//   };

export default connect(mapStateToProps)(CardProducts);