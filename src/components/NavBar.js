import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'

import logo from '../assets/logo.png';

export default function NavBar({ title }) {
    const selectedPlaces = (title) => {
        return title === 'PLACES' ? 'selected' : 'unselected';
    };

    const selectedFoods = (title) => {
        return title === 'FOODS' ? 'selected' : 'unselected';
    };

    const selectedPeople = (title) => {
        return title === 'PEOPLE' ? 'selected' : 'unselected';
    };

    return(
        <Menu>
            <div className="menu">

            <img src={logo} alt="Orange" />
            <div>
                <Link to="/foods" className={selectedFoods(title)}>FOODS</Link>
                <Link to="/people" className={selectedPeople(title)}>PEOPLE</Link>
                <Link to="/places" className={selectedPlaces(title)}>PLACES</Link>
            </div>
            </div>
        </Menu>
    )
}


const Menu = styled.div`
    @media only screen and (max-width: 2000px) {    
        padding: 0 20%;         
    }

    @media only screen and (max-width: 768px) {        
        padding: 0 10%;
    }   

    @media only screen and (max-width: 480px) {        
        padding: 0 5%;
    }

    .menu {
        height: 100%;
        background-color: #F9F9F9;
        font-family: 'OpenSans', sans-serif;
        background-color: #ffffff;
        box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        img {
            width: 230px;
            height: 29.02px;
        }
    
        .unselected {
            font-family: "Open sans";
            color: #4A4A4A;
            font-weight: lighter;
            display: inline-block;
            margin-right: 20px;
            letter-spacing: 1px;
            line-height: 22px;
        }
    
        .selected {
            font-family: "Open sans";
            color: #4A4A4A;
            font-weight: bold;
            display: inline-block;
            margin-right: 20px;
            letter-spacing: 1px;
            line-height: 22px;
    
        }
    
        a:last-child {
            margin-right: 0px;
        }
    
        a:Link {
            text-decoration:none;
        }
    }
`;