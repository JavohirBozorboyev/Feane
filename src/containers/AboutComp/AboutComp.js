import React from 'react'
import AboutImg from '../../img/background/about-img.png'
import './aboutcomp.css'

function AboutComp() {
    return (
        <div className='ab-comp'>
            <div className="container">
                <div className="ab-left">
                    <img src={AboutImg} alt="" />
                </div>
                <div className="ab-right">
                    <h3>We are Feane</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutComp
