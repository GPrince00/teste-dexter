import React from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Page from './components/Page';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />            
            <Route path="/singup" component={SingUp} />            
            <Route path="/people" component={Page} /> 
            <Route path="/places" component={Page} /> 
            <Route path="/foods" component={Page} />  
        </BrowserRouter>
    );
}