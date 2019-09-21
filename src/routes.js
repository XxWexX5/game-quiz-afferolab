import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
        </Switch>
    </BrowserRouter>
);

export default Routes;