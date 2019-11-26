import React, {useState} from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

import api from '../services/api';

import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';

import aplication from '../services/aplication';

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    

    async function handleSubmit(e) {
        e.preventDefault();

        var token = await aplication.login( username, password, api );
        if(token === "1"){
            alert("Usuário ou senha não podem estar vazios")
        } else {
            if (token === "2"){
                alert("Usuário ou senha invalidos!");
            } else {            
                localStorage.setItem('sessionToken', token);
                history.push('/foods');
            }
        }
        
        
    }   
    
    async function handleSubmit2(e){
        e.preventDefault();
        history.push('/singup/');          
    }
    
    return (
        
        <LoginContainer>
            <form onSubmit={handleSubmit}>                          
                <img src={logo} alt="Orange" />
                <div className="userInfoBox">
                    <p className="userInfoText">Email</p>
                    <img src={mail} atl="Mail" />
                    <input 
                        className="userInfoInput"
                        placeholder="seunome@email.com"
                        value={username}
                        onChange={ e => setUsername(e.target.value)} 
                    />                    
                </div>
                <div className="userInfoBox">
                    <p className="userInfoText">Password</p>
                    <img src={lock} atl="Lock" />
                    <input 
                        className="userInfoInput"
                        type={check ? "text" : "password"}                   
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>              
                <label id="showPassword">Mostrar Senha
                    <input 
                        id="checkBox" 
                        type="checkbox"  
                        onChange={e => setCheck(e.target.checked)}/>
                </label>                               
                <p id="problemsToAccess">Problemas para acessar sua conta?</p>
                <button type="submit" id="btnLogin">Acessar</button>  
                <p id="or">ou</p>
                <button  onClick={handleSubmit2} id="btnSingUp">Cadastrar</button>  
                <p id="termsOfUse">Termos de uso - Politica de privacidade</p>
            </form>
            <img src={bg} alt="backgroud" id="img1" />
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #F9F9F9;

    form {  
        margin-top: 70px;
        margin-bottom: 20px;
        margin-button: 100px;
        background-color: #FFFFFF;
        box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
        letter-spacing: 1px; 
        padding: 40px;
        font-family: 'OpenSans', sans-serif;
        margin-right: 10px;    

        img {
            width: 230px;
            height: 29.02px;
            margin-bottom: 20px;
            margin-top: 10px;
        }

        .userInfoBox {    
            margin-top: 20px;
            position: relative;

            img {
                width: 20px;
                height: 20px;
                position: absolute;
                top: 35px;
                right: 15px;
            }
        }

        .userInfoText{
            color: #4A4A4A;    
            font-size: 16px;
            font-weight: bold;    
            line-height: 19px;
            text-align: left;
        }

        .userInfoInput {    
            border: 1px solid #4A4A4A;
            padding-left: 15px;
            width: 94%;
            height: 44px; 
            margin-top: 10px;
            margin-bottom: 10px;    
            color: #000000;    
            font-size: 16px;
            font-weight: lighter;    
            line-height: 19px;
            text-align: left;
        }

        ::-webkit-input-placeholder {
            color: #9B9B9B;    
            font-family: 'OpenSans', sans-serif; 
            font-weight: lighter;
            font-size: 16px;    
            letter-spacing: 1px;
            line-height: 19px;
            width: 192px;    
        }

        #showPassword {
            color: #4A4A4A;     
            font-size: 16px; 
            float: left;
        }

        #checkBox {
            width: 16px;
            height: 16px;
            float: left;
            margin-right: 10px;
        }

        #problemsToAccess {
            color: #4A4A4A;
            font-weight: bold;
            font-size: 14px;
            margin-top: 50px;
            margin-bottom: 25px;
            line-height: 17px;
        }

        button {    
            width: 100%;
            height: 44px;    
            font-size: 16px;
            font-weight: bold;    
            line-height: 19px;    
            text-align: center;
            margin-top: 25px;
            margin-bottom: 25px;
            font-family: 'OpenSans', sans-serif; 
            cursor: pointer;      
        }

        #btnLogin {
            background-image: linear-gradient(134.72deg, #AE23A9 0%, #DC4E1B 100%);
            color: #FFFFFF;
            border: 0; 
        }

        #or {
            color: #4A4A4A;
            font-size: 16px;
            font-weight: lighter;     
            line-height: 19px;
            text-align: center;    
            
        }

        #btnSingUp {
            background-color: #FFFFFF;
            color: #4A4A4A;
            border: 1px solid #9B9B9B;
        }

        #termsOfUse {
            color: #4A4A4A;
            font-size: 14px;
            font-weight: lighter;
            line-height: 17px;
        }         
    }

    #img1 {
        max-width: 700px;
    }
`;