import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import api from '../services/api';
import aplication from '../services/aplication';

import NavBar from './NavBar';
import Card from './Card';
import Separator from './Separator';



export default function Page({ history, location }){

    let show = {
        '/places': {
            'api': 'Place',
            'title': 'PLACES'        
        },
        '/foods': {
            'api': 'Food',
            'title': 'FOODS'        
        },
        '/people': {
            'api': 'Person',
            'title': 'PEOPLE'        
        }
    };

    const [items, setItems] = useState([]);

    var loadItems = async () => {
        var response = await aplication.renderItems( show, location, api);
        setItems(response);
    }
    
    
    function invalidToken() {
        history.push('/');
    }
    
    useEffect(() => {
        localStorage.getItem('sessionToken') === null ||
        localStorage.getItem('sessionToken') ===  "undefined" ? invalidToken() : loadItems();
    }, [invalidToken, loadItems]);    
    
    return (
        <div>
            <NavBar title = { show[location.pathname].title }></NavBar>
            <Body>
                <div className = "teste">
                    <Separator title = { show[location.pathname].title }></Separator>
                    <Card items = { items }></Card>
                    
                </div>
            </Body>
        </div>
    )
 }

 const Body = styled.div`
      
    @media only screen and (max-width: 2000px) {               
        //background-color: pink;
        padding: 30px 20%;         
    }

    @media only screen and (max-width: 768px) {        
        padding: 30px 10%;
    }   

    @media only screen and (max-width: 480px) {        
        padding: 30px 5%;
    }   

        
 `;
 