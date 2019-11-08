import React, { Component } from 'react';
import {connect} from "react-redux"

class CardProducts extends Component {
   
    // handleChange=(e)=>{
    //     let v = e.target.value
    //     if(v < 0)
    //         return ;
    //     this.setState({
    //         number:v
    //     })
        
    // }
    render() {
        const {addProduct} = this.props
        // console.log(this.props);
        
        return (
            <div>
               {
                   addProduct.length > 0  ?
                   
                   addProduct.map(pr=>
                        
                    <ul>
                        <li><b>Product:{pr.title} </b> | <input type="number" value={pr.remaining} onChange={this.handleChange}  /> | <b>{pr.price} * {pr.remaining}</b> | <button>&times;</button> </li>
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
        addProduct:state.addProduct
    }
}

export default connect(mapStateToProps)(CardProducts);