import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import CartItem from './CartItem'
export default class CartList extends Component {
    render() {
        return (
            <ProductConsumer>
                {(data) => {
                    return data.cart.map((product) => {
                        return <CartItem key={product.id}
                            product={product} />
                    })
                }}
            </ProductConsumer>
        )
    }
}
