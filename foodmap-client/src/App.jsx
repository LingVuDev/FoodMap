import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { DetailPage } from './routes/DetailPage';
import { Home } from './routes/Home';
import { UpdatePage } from './routes/UpdatePage';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/restaurants/:id/update" component={UpdatePage}></Route>
                <Route exact path="/restaurants/:id" component={DetailPage}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;