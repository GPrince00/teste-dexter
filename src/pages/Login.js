import React, {useState} from 'react';
import './Login.css'

import api from '../services/api';

import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', {
                username,
                password
            }, {
                headers: {
                    'X-Parse-Application-Id': 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
                    'X-Parse-Master-Key': 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga'
                }
            })   
            history.push(`/foods/`);        
            localStorage.setItem('sessionToken', response.data.sessionToken);            
        } catch (err) {
            alert("Usuário ou senha invalidos!")            
        }
    }   

    return (
        
        <div className="login-container">
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
                <button type="button" id="btnSingUp">Cadastrar</button>  
                <p id="termsOfUse">Termos de uso - Politica de privacidade</p>
            </form>
            <img src={bg} alt="backgroud" id="img1" />
        </div>
    );
}

