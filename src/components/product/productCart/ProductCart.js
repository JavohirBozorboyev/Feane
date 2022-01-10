import React from 'react'
import './productCart.css'
import f2 from '../../../img/product/f2.png'



function ProductCart() {
    return (
        <div className='cart'>
            <div className="top">
                <img src={f2} alt="" />
            </div>
            <div className="bottom">
                <div className="info">
                    <h3>Delicious Burger</h3>
                    <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                </div>
                <div className="price">
                    <p>$15</p>
                    <button className='fa fa-shopping-cart'></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCart
