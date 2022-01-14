import React from 'react'
import './productCart.css'
import f2 from '../../../img/product/f2.png'



function ProductCart({name, img, addToCart, products}) {
    

    return (
        <div className='cart'>
            <div className="Carttop">
                <img src={img} alt="" />
            </div>
            <div className="Cartbottom">
                <div className="info">
                    <h3>{name}</h3>
                    <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                </div>
                <div className="price">
                    <p>$15</p>
                    <button className='fa fa-shopping-cart'>{addToCart}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCart
