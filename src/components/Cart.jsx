import React, { Component } from 'react'
import Title from './Title'
import CartItem from './CartItem';
import {ProductConsumer} from '../context'
export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="your" title="cart" />
                        <div className="row">
                             <ProductConsumer>
                                 {(data) => {
                                     return data.cart.map((product) => {
                                         return <CartItem key={product.id} 
                                         product={product}/>
                                     })
                                 }}
                             </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        
        
        )

    }
}
