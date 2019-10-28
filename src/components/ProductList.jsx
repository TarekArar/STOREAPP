import React, { Component } from 'react'
import Title from './Title';
import Product from './Product';
import {ProductConsumer} from '../context'
export default class ProductList extends Component {
  
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="products" />
                        <div className="row">
                             <ProductConsumer>
                                 {function(data){
                                     return data.products.map(function(product) {
                                         return <Product key={product.id} 
                                         product={product}/>
                                     })
                                 }}
                             </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <Product/>
                
        )
    }
}

