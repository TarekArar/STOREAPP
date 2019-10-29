import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
import { Button } from './Button'
import { Link } from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {data => {
                    const { modalOpen, closeModal } = data
                    const { title, img, price } = data.modalProduct
                    if (!modalOpen) return null
                    else return (
                        <ModalWrapper>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 col-md-6 col-lg-4 text-center mx-auto text-capitalized">
                                        <h3 className=" text-blue">item Added to cart</h3>
                                        <div className="img-container  mx-auto text-center">
                                            <img src={img} alt="" />
                                        </div>
                                        <Button onClick={() => { data.closeModal() }}>Back to products</Button>
                                        <Button cart onClick={() => { data.closeModal() }}>Go to cart</Button>
                                    </div>
                                </div>
                            </div>
                        </ModalWrapper>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const ModalWrapper = styled.div`
border-radius: 0.3rem;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0,0,0,0.3);
display: flex; 
align-items: center;
justify-content:center;
#modal {
    background : var(--mainWhite);
}
`
