import React from 'react';
import styled from 'styled-components';

export default function Cards({ items }){    
    return (        
        <Card>
            {items.map(item =>(
                <li key={item.objectId}>                              
                    <img src={item.link} alt={item.name} />
                    <p>{item.name}</p>                                               
                </li>                    
            ))}          
        </Card>          
    )
}

const Card = styled.ul `
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;

    li {
        position: relative;
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.2);

        img {
            width: 250px;
            height: 250px;      
        }

        p{
            color: #ffffff;
            position: absolute;
            bottom: 10px;
            left: 10px;
            font-family: 'OpenSans', sans-serif;
            font-size: 28px;
            font-weight: bold;
        }
    }
`;