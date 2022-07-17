import React from 'react'
import Price from '../price/Price'
import './navbar.css'
import { NavLink as Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <div className='navbar'>
            <div className="left">TRADING</div>
            <div className="center">
                <NavLink className="links" to='/'>Markets</NavLink>
                <NavLink className="links" to='/page1'>Stocks</NavLink>
                <NavLink className="links" to='/page2'>Indices</NavLink>
                <NavLink className="links" to='/page4'>contactUs</NavLink>
            </div>
            <div className="right">
               
                <div className="btn">
                    <NavLink className="signin" to='./page2'>Sign In</NavLink>
                    <div className="signup">Sign Up</div>
                </div>
            </div>
           
        

        </div>
        <Price/>
        </>
    )
}

export default Navbar