import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={() => <h1>Hello Worl</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;