import React from 'react'
import './productList.css'
import ProductCart from '../productCart/ProductCart'

function ProductList() {
    return (
        <div className='list'>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            
            
        </div>
    )
}

export default ProductList
