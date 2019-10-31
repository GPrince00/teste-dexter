import React, { useEffect, useState } from 'react';
import './Main.css'
import api from '../services/api';

import NavBar from '../components/NavBar';

export default function Foods({ history }){
    const [items, setItems] = useState([]);

    async function loadItems() {
        const response = await api.get('/classes/Food', {
            headers: {
                'X-Parse-Application-Id': 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
                'X-Parse-Master-Key': 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga'
            }
        })
        setItems(response.data.results);
    }

    function invalidToken() {
        history.push('/');
    }

    useEffect(() => {
        localStorage.getItem('sessionToken') === null || "undefined" ? invalidToken() : loadItems();
    }, []);

    return (
        <div className="main-container">
            <NavBar></NavBar>
            <div className="body">
                <ul>
                    {items.map(item =>(
                        <li key={item.objectId}>                          
                            <img src={item.link} alt={item.name} />
                            <p>{item.name}</p>                                               
                        </li>                    
                    ))}          
                </ul>
            </div>
        </div>
    )
 }