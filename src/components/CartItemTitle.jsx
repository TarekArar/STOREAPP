import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProductConsumer } from '../context';

export default class cartItemTitle extends Component {

    render() {

        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 col-lg-2 mx-auto">
                        <p className="text-uppercase">products</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p className="text-uppercase">name of product</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p className="text-uppercase">price</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p className="text-uppercase">quantity</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p className="text-uppercase">remove</p>
                    </div>
                    <div className="col-10 col-lg-2 mx-auto">
                        <p className="text-uppercase">total</p>
                    </div>
                </div>

            </div>
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

