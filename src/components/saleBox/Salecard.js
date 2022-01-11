import React from 'react'
import './salebox.css'
import o1 from '../../img/product/o1.jpg'

function Salecard() {
    return (
        <div className='salebox'>
            <div className="saleleft">
                <img src={o1} alt="" />
            </div>
            <div className="saleright">
                <h3>Tasty Thursdays</h3>
                <h1>20% Off</h1>
                <button>order now <i className='fa fa-shopping-cart'></i></button>
            </div>
        </div>
    )
}

export default Salecard
