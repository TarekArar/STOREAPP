import React, { Component } from 'react'
import {storeProducts , detailProduct} from './data'
const ProductContext = React.createContext()
//Provider 
//Consumer

class ProductProvider extends Component {
    state= {
        products : [], 
        detailProduct : detailProduct,
        cart: [],
        modalOpen:false,
        modalProduct:detailProduct
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = (id) => { 
        const product = this.getItem(id)
        this.setState(() => {
            return {detailProduct:product}
        })
    } 
    addtoCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true 
        product.count = 1 
        product.total = product.price
        this.setState(() => {
            return {products:tempProducts,
                cart: [...this.state.cart , product]
            }
        })
    }

    incrementCount = (id) => {
        let tempCart = [...this.state.cart]
        const index = tempCart.indexOf(this.getItem(id))
        const product = tempCart[index]
        product.count++
        product.total = product.count * product.price
        this.setState(() => {
            return {cart:tempCart}
        })
    }

    decrementCount = (id) => {
        let tempCart = [...this.state.cart]
        const index = tempCart.indexOf(this.getItem(id))
        const product = tempCart[index]
        if(product.count > 1){
            product.count-- 
            product.total = product.count * product.price
            this.setState(() => {
                return {cart:tempCart}
            })
        }
    }

    removeItem = (id) => {
        let tempCart = [...this.state.cart]
        let products = [...this.state.products]
        let index = tempCart.indexOf(this.getItem(id))
        tempCart.splice(index, 1)
        index = products.indexOf(this.getItem(id))
        let product = products[index]
        product.inCart = false
        this.setState(() => {
            return {cart:tempCart, products}
        })
    }

    componentDidMount(){
        this.setProducts()
    }
    setProducts(){
        var products = []
        storeProducts.forEach((item) => {
            var singleItem = {...item}
            products = [...products, singleItem]
        })
        this.setState(() => {
            return {products}
        })
    }
    openModal = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return { modalProduct:product,
                modalOpen:true
            }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return {modalOpen:false}
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
            ...this.state, 
            handleDetail:this.handleDetail, 
            addtoCart:this.addtoCart,
            openModal:this.openModal,
            closeModal:this.closeModal,
            incrementCount:this.incrementCount,
            decrementCount:this.decrementCount,
            removeItem:this.removeItem
        }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer; 

export {ProductProvider, ProductConsumer}
