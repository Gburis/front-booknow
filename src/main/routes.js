import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../pages/Home/Home';
import Catalogo from './../pages/Catalogo/Catalogo'
import Perfil from './../pages/Perfil/Perfil'
import Produto from './../pages/Produto/Produto'
import Login from './../pages/Login/Login'

class Routes extends React.Component{
    render(){
        return(
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/catalogo' component={Catalogo}/>
                    <Route exact path='/perfil' component={Perfil}/>
                    <Route exact path='/produto' component={Produto}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </main>
        );
    }
}

export default Routes;

