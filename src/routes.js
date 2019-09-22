import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Introduction from './pages/Introduction';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/introducao" exact component={Introduction} />
            <Route path="/quiz" exact component={Quiz} />
            <Route path="/resultado" exact component={Result} />
        </Switch>
    </BrowserRouter>
);

export default Routes;