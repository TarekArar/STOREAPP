import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import styled from 'styled-components'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(data) => {
                    const { id, title, img,price, company, info, inCart, count, total } = data.detailProduct
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto my-3">
                                    <img src={img} className="img-fluid" alt="Product"/>
                                </div>
                                <div className="col-md-6 col-10 mx-auto text-capitalize my-3">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-muted mt-3 mb-2">made by: <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue">price: <span>$</span>{price}</h4>
                                    <p className="font-weight-bold text-capitalize mt-3 mb-0">some info about product:</p>
                                    <p className="text-muted beal">{info}</p>
                                    <div >
                                        <Link to='/'>
                                        <Button className="col-5 my-2 mx-2">back to products</Button>
                                        </Link>
                                        <Button cart className="col-5 my-2 mx-2" disabled={inCart?true:false} onClick={()=>{
                                            data.addtoCart(id)
                                            data.openModal(id)
                                            }}>
                                            {inCart?'in cart':'Add to cart'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
                }

            </ProductConsumer>


        )
    }
}


