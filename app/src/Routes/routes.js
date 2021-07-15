import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Produtos from '../Pages/Produtos'
import Login from '../Pages/Login'
import Finalizar from '../Pages/Finalizar';
import Cadastro from '../Pages/Cadastro';

export default function Routes(){
	return(
		<>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home}/>
                <Route path='/produtos' component= {Produtos}/>
                <Route path='/login' component= {Login}/>
                <Route path='/finalizarCompra' component= {Finalizar}/>
                <Route path='/cadastro' component= {Cadastro}/>

            </Switch>
        </BrowserRouter>
        </>
    )
    }