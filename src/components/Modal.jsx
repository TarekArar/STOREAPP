import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {data => {
                    const {modalOpen, closeModal} = data
                    if(!modalOpen) return null 
                    else return(
                        <ModalWrapper>
                            <h1>Hello from modal</h1>
                            <button onClick={() => { closeModal()}}>close</button>
                        </ModalWrapper>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const ModalWrapper = styled.div`
background-color : var(--mainWhite)
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex; 
align-items: center;
justify-content:center
`
