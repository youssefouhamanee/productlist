import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Modaladdproduct extends Component {
    render() {
        const {isOpen}=this.props
        return (
            <div>
                {
                    isOpen?
                    <form>
                        <input type="text" placeholder="title" />
                        <input type="text" placeholder="price" />
                        <input type="text" placeholder="stock" />
                        <label>Select Picture of product</label><input type="file"/>
                        <button>Add</button>
                        <button>Close</button>
                    </form>
                    :null
                }
                
            </div>
        )
    }
}



export default Modaladdproduct