import React, { Component } from 'react'
import Title from './Title'
import CartItem from './CartItem';
import {ProductConsumer} from '../context'
import CartItemTitle from './CartItemTitle'

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
                                     if (data.cart === []) return null 
                                     else
                                     {return data.cart.map((product) => {
                                         return <CartItem key={product.id} 
                                         product={product}/>
                                     })}
                                 }}
                             </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        
        
        )

    }
}
