import React from 'react'
import Client1 from '../../../img/product/client1.jpg'
import './carouselCard.css'





function CarouselCard() {
    return (
        <div className='item'>
            <div className="top">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, adipisci eaque, aliquam, temporibus est et praesentium ipsam nulla dolores quisquam eius. </p>
                <h3>Mike Hamel</h3>
                <p>magna aliqua</p>
            </div>
            <div className="bottom">
                <div className="user">
                    <img src={Client1} alt="user info" />
                    <article></article>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard
