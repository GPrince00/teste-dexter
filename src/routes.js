import React from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import People from './pages/People';
import Places from './pages/Places';
import Foods from './pages/Foods';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />            
            <Route path="/people" component={People} /> 
            <Route path="/places" component={Places} /> 
            <Route path="/foods" component={Foods} />            
        </BrowserRouter>
    );
}