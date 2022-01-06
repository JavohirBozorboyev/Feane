import React, {useState} from 'react'
import './header.css'

function Header() {

    const [click, setClick ] = useState(false);
    const handleClick = ()=> setClick(!click)

    return (
        <>
          <nav className='navbar'>
              <div className="container">
                  <div className="left">
                      <button className={click ? 'fa fa-times' : 'fa fa-bars'} onClick={handleClick}></button>
                      <a href="#">Feane</a> 
                  </div>
                  <div className={click ? 'center active': 'center'}>
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Menu</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Book table</a></li>
                      </ul>
                  </div>
                  <div className="right">
                      <a href="#" className='fa fa-user'></a>
                      <a href="#" className='fa fa-shopping-cart'></a>
                  </div>
              </div>
          </nav>
        </>
    )
}

export default Header
