import React, { Component } from 'react'
import Title from './Title'
import CartItem from './CartItem';
import { ProductConsumer } from '../context'
import CartItemTitle from './CartItemTitle'
import CartList from './CartList';
import EmptyCart from './EmptyCart';

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
                                    if (data.cart.length === 0) return (<EmptyCart/>)
                                    else {
                                        return (
                                            <React.Fragment>
                                                <CartItemTitle />
                                                <CartList />
                                            </React.Fragment>
                                        )
                                    }
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>


        )

    }
}
