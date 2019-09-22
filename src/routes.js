import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Introduction from './pages/Introduction';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/introducao" exact component={Introduction} />
            <Route path="/quiz" exact component={() => <h2>Olá sou o Quiz</h2>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;