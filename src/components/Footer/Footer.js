import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="left">
                        <h3>Contact us</h3>
                        <a href="" className='fa fa-map-marker-alt'> Location</a>
                        <a href="" className='fa fa-phone'> Call +01 123 456 789</a>
                        <a href="" className='fa fa-envelope'> demo@gmail.com</a>
                    </div>
                    <div className="center">
                        <h3>Feane</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, qui vitae. Cupiditate asperiores totam cum quisquam nesciunt atque officia dolor.</p>
                        <div className="link">
                            <a href="" className='fab fa-instagram'></a>
                            <a href="" className='fab fa-facebook'></a>
                            <a href="" className='fab fa-telegram'></a>
                            <a href="" className='fab fa-twitter'></a>
                        </div>
                    </div>
                    <div className="right">
                        <h3>Opening Hours</h3>
                        <p>Everyday</p>
                        <p>10.00 Am -10.00 Pm</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
