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
    grid-gap: 25px;  
         
    @media only screen and (max-width: 2000px) {               
        grid-template-columns: repeat(4, 1fr);
        p {
            font-size: 28px;
        }
    }

    @media only screen and (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);  
        p {
            font-size: 28px;
        }             
    }

    @media only screen and (max-width: 900px) {
        p {
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        p {
            font-size: 24px;
        }
    }

    @media only screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        p {
            font-size: 22px;
        }
    }

    li {
        position: relative;
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.2);

        img {
            width: 100%;
            height: 100%;      
        }

        p{
            color: #ffffff;
            position: absolute;
            bottom: 10px;
            left: 10px;
            font-family: 'OpenSans', sans-serif;
            font-weight: bold;
        }
    }
`;