import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import api from '../services/api';

import NavBar from './NavBar';
import Card from './Card';
import Separator from './Separator';

export default function Page({ page, title, history }){

    const [items, setItems] = useState([]);

    async function loadItems() {
        const response = await api.get(`/classes/${page}`)
        setItems(response.data.results);
    }

    function invalidToken() {
        history.push('/');
    }

    useEffect(() => {
        localStorage.getItem('sessionToken') === null ||
        localStorage.getItem('sessionToken') ===  "undefined" ? invalidToken() : loadItems();
    }, []);
    
    return (
        <div>
            <NavBar></NavBar>
            <Body>
                <Separator title = { title }></Separator>
                <Card items = { items }></Card>                
            </Body>
        </div>
    )
 }

 const Body = styled.div`
    max-width: 800px;
    margin: 0 auto;    
    padding: 30px 0;
    text-align: center;
 `;
 