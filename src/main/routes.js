import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../pages/Home/Home';
import Catalogo from './../pages/Catalogo/Catalogo'

class Routes extends React.Component{
    render(){
        return(
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/catalogo' component={Catalogo}/>
                </Switch>
            </main>
        );
    }
}

export default Routes;

