import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import logo from '../assets/logo.png';

export default function NavBar() { 
    return(
        <div className="menu">
        <img src={logo} alt="Orange" />
            <div>
                <Link to="/foods" className='menuItems'>FOODS</Link>
                <Link to="/people" className='menuItems'>PEOPLE</Link>
                <Link to="/places" className='menuItems'>PLACES</Link>            
            </div>
        </div>
    )
}