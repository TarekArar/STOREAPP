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
                    const {incrementCount , decrementCount} = data
                    return (
                        <ItemContainer className="col-10 my-2 ">
                            <img src={img} alt="" style={{ height: '80px' }} />
                            <h3>{title}</h3>
                            <h3><bold>{price} $</bold> </h3>
                            <div>
                                <button onClick={() =>  decrementCount(id) }>-</button>
                                <button>{count}</button>
                                <button onClick={() =>  incrementCount(id) }>+</button>
                            </div>
                            <h3><bold>{total} $</bold> </h3>

                        </ItemContainer>
                    )
                }}
            </ProductConsumer>
        )
    }
}



const ItemContainer = styled.div`
display: flex;
flex-direction: row; 
justify-content:space-between;
align-items: center
button {
    background: transparent; 
    border:2px solid black;
    margin:0 1px;
    &:hover{
        background: black;
        color: white;
    }
}
`

