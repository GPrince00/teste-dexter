import React from 'react';
import styled from 'styled-components'

export default function ({ title }){    
    return (
        <Separator>            
            <p id="list">LIST OF {title} </p>
            <div id="retangle"/>               
        </Separator>
    )
 }

 const Separator = styled.div `      
    margin-bottom: 35px;
    width: 100%;

    #list {
        color: #4A4A4A;
        font-family: 'OpenSans', sans-serif;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 1px;        
        text-align: left;        
        margin-bottom: 10px;
    }

    #retangle {
        background-image: linear-gradient(134.72deg, #AE23A9 0%, #DC4E1B 100%);
        box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);        
        height: 5px;      
    }
 `;