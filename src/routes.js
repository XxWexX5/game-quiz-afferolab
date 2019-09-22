import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/introducao" exact component={() => <h2>Hello World!</h2>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;