import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const { id, title, img, price, company, info, inCart, count, total } = this.props.product
        return (
            <ProductWrapper className="col-lg-3 col-md-6 col-9 my-3 mx-auto">
                <ProductConsumer>
                    {data => {
                        return (
                            <div className="card">
                                <div className="img-container p-5" onClick={() => { data.handleDetail(id) }}>
                                    <Link to="/details">
                                        <img src={img} alt="product" className="card-img-top" />
                                    </Link>
                                    <button className="cart-btn" disabled={inCart ? true : false} onClick={() => { 
                                        data.addtoCart(id)
                                        data.openModal(id)
                                        }}>
                                        {inCart ? (<p className="text-capitalize mb-0">In cart</p>) : (<i className="fas fa-cart-plus" >Add</i>)}
                                    </button>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">{title} </p>
                                    <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{price}</h5>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </ProductWrapper>
        )
    }
}



Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all 1s linear;
}

.card-footer {
    border-top: transparent;
    background: transparent
}

&:hover {
    .card {
        border : 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2)
    }
    .card-footer{
        background: rgba(247,247,247)
    }
    
    
}

.img-container {
    position: relative;
    overflow: hidden
}

.card-img-top {
    transition: all 1s linear;
}

.img-container:hover .card-img-top
     {
        transform: scale(1.2)
    }
.cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        background: var(--lightBlue );
        border: none;
        color: var(--mainWhite);
        padding: 0.2rem 0.4rem;
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%,100%);
        transition: all 1s linear
    }
    
.img-container:hover .cart-btn {
        transform: translate(0,0)
    }
.cart-btn:hover {
    color: var(--mainBlue); 
    cursor: pointer
}
`

