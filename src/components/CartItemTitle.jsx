import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProductConsumer } from '../context';

export default class cartItemTitle extends Component {

    render() {

        return (
            <ItemContainer className="col-10 my-2 text-capitalize">
                <h3>image</h3>                
                <h3>title</h3>
                <h3>price</h3>
                <h3>quantity</h3>
                <h3>total</h3>

            </ItemContainer>
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

