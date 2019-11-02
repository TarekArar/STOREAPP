import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ProductConsumer } from '../context';
import { throwStatement } from '@babel/types';

export default class cartItem extends Component {

    render() {
        const { id, title, img, price, company, info, inCart, count, total } = this.props.product
        return (
            <ProductConsumer>
                {data => {
                    const { incrementCount, decrementCount, removeItem } = data
                    return (
                        <ItemContainer className="row text-center my-1 mx-auto container">
                                <div className="col-10 text-center mx-auto col-lg-2">
                                <img src={img} alt="" style={{ height: '80px' }} />
                            </div>
                            <div className="col-10 mx-auto text-center col-lg-2">
                                <p>{title}</p>
                            </div>
                            <div className="col-10 mx-auto text-center col-lg-2">
                                <p><strong>${price}</strong> </p>
                            </div>
                            <div className="col-10 mx-auto text-center col-lg-2"><div>
                                <button className="mx-1 pd-4" onClick={() => decrementCount(id)}>-</button>
                                <button className="mx-1 pd-4">{count}</button>
                                <button className="mx-1 pd-4" onClick={() => incrementCount(id)}>+</button>
                            </div></div>
                            <div className="col-10 text-center mx-auto col-lg-2">
                                <i class="fas fa-trash" style={{ fontSize: "25px", color: "#FEE006" }} onClick={() => { removeItem(id) }} ></i>
                            </div>
                            <div className="col-10 text-center mx-auto col-lg-2">
                                <p><strong>Item Total: ${total}</strong> </p>
                            </div>

                        </ItemContainer>
                    )
                }}
            </ProductConsumer>
        )
    }
}



const ItemContainer = styled.div`
align-items: flex-start;
justify-content: center
button {
    background: transparent; 
    border:1.5px solid black;
    padding:2px 10px;
    align-self: center
    &:hover{
        background: black;
        color: white;
    }

`

