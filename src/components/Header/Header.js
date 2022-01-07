import React, {useState} from 'react'
import './header.css'
import {Link} from 'react-router-dom'

function Header() {

    const [click, setClick ] = useState(false);
    const handleClick = ()=> setClick(!click)

    return (
        <>
          <nav className='navbar'>
              <div className="container">
                  <div className="left">
                      <button className={click ? 'fa fa-times' : 'fa fa-bars'} onClick={handleClick}></button>
                       <Link to='/'>Feane</Link>
                  </div>
                  <div className={click ? 'center active': 'center'}>
                      <ul>
                          <li><Link to='/' onClick={handleClick}>Home</Link></li>
                          <li><Link to='/menu' onClick={handleClick}>Menu</Link></li>
                          <li><Link to='/about' onClick={handleClick}>About</Link></li>
                          <li><Link to='/book' onClick={handleClick}>Book Table</Link></li>
                      </ul>
                  </div>
                  <div className="right">
                      <Link to='#' className='fa fa-user'></Link>
                      <Link to='#' className='fa fa-shopping-cart'></Link>
                  </div>
              </div>
          </nav>
        </>
    )
}

export default Header
