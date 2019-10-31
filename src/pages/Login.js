import React, {useState} from 'react';
import './Login.css'

import api from '../services/api';

import logo from '../assets/logo.png';
import bg from '../assets//bg.jpg';

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
                <p className="userInfo">Email</p>
                <input 
                    className="userInfoInput"
                    placeholder="seunome@email.com"
                    value={username}
                    onChange={ e => setUsername(e.target.value)} 
                    />
                <p className="userInfo">Password</p>
                <input 
                    className="userInfoInput"
                    type={check ? "text" : "password"}                   
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                <input
                    id="checkBox"
                    type="checkbox"
                    onChange={e => setCheck(e.target.checked)}  
                />
                <p id="showPassword">Mostrar Senha</p>                
                <p id="problemsToAccess">Problemas para acessar sua conta?</p>
                <button type="submit" id="btnLogin" >Acessar</button>  
                <p id="or">ou</p>
                <button type="button" id="btnSingUp">Cadastrar</button>  
                <p id="termsOfUse">Termos de uso - Politica de privacidade</p>
            </form>
            <img src={bg} alt="backgroud" id="img1" />
        </div>
    );
}

