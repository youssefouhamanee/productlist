import React, { Component,Fragment } from 'react';
import {connect} from "react-redux"
import {deleteProduct,handleChangeValue} from "../actions/actions"
import { Div,
         Row, 
         Ul, 
         Li ,
         Input} from './Styled';
import {Table,Td,Img,Span,I} from './CardStyled'
import BarShopping from './BarShopping';

class CardProducts extends Component {


    handleDelete=(id)=>{
        let product = this.props.cart.find(cp=>cp.id == id)
        let removePoductFromCart= this.props.cart.filter(cp=> cp.id !== id)
        this.props.deleteProductFromCart(this.props.state,removePoductFromCart, product)
      
    }
    
   
    
  
    render() {
        const {cart} = this.props
        // console.log(this.props);
        return (
        <Fragment>
            <BarShopping />
            <Div>
            
                <Row>
                    <Table>
                    {
                        cart.length > 0  ?
                        
                        cart.map(pr=>
                             
                             
                         <tbody>
                             <tr key={pr.id}>
                                 <Td><Img src={pr.img} alt={pr.img}/></Td>
                                 <Td>{pr.title}<p><Span className="price">{pr.price}$</Span></p></Td>
                                 <Td><Input type="number" value={pr.total} 
                                 onChange={(e)=>this.props.handleValue(this.props.state,e.target.value-pr.total,pr.id)} /></Td> 
                                 <Td>{pr.price * pr.total}$</Td> 
                                 <Td><I className="fa fa-trash fa-lg" onClick={()=>this.handleDelete(pr.id)}></I></Td>
                                
                             </tr>
                        </tbody>
                         )
                         :<tr className="center">
                          <Td className="card-empty">  Your Shopping Cart is empty ¯\_(ツ)_/¯ !!</Td>
                         </tr>
                    }
                    </Table>
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
        }),
        state:state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleValue: (state,v,i)=>{dispatch(handleChangeValue(state,v,i))},
        deleteProductFromCart:(state,productInList,product)=>{
            dispatch(deleteProduct(state,productInList,product))
        },
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(CardProducts);