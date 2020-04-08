import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';

import Login from './pages/logon';
import Registro from './pages/registro';
import Selecao from './pages/selecao';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/registro' component={Registro}/>
                <Route path='/selecao' component={Selecao}/>
            </Switch>
        </BrowserRouter>
    );
}