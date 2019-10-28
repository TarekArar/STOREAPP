import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from "styled-components"
import {Button} from './Button'
export default class Navbar extends Component {
    
    render() {
        return (
            <Wrapper className="navbar navbar-expand-sm px-sm-10">
                <Link to='/' >
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link >
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                        products
                         </Link >
                    </li>
                    
                </ul>
                <Link to='/cart' className="ml-auto">
                    <Button >
                        <span className="mr-2">
                            <i className="fas fa-cart-plus mr-2"/> 
                        </span>
                        my cart
                    </Button > 
                </Link >  
            </Wrapper>
        )
    }
}

const Wrapper = styled.nav`
    background: var(--mainBlue) ;
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize; 
    }
`;
