import React from 'react'
import logo from '../images/vodafoneLogo.png'
import {FaUserMd,FaSearch} from 'react-icons/fa';

const vodaLogo = <img src={logo} className='logo' alt='logo'/>
const Header = () => {
  return (
    <div className='shadow'>
    <div className='header wrapperContent'>
        {vodaLogo}
        <ul>
            <li><a href='/'>Services</a></li>
            <li><a href='/add'>Add Service</a></li>
            <li>Help</li>
        </ul>
        <div className='headerRight'>
           <FaSearch style={{fontSize:'30px',padding:'10px'}}/><FaUserMd style={{fontSize:'30px',padding:'10px'}}/>
        </div>
    </div>
    </div>
  )
}

export default Header