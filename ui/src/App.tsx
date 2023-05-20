import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from "./routes/About";
import { Settings } from "./routes/Settings";
import { Home } from "./routes/Home";

import './App.css';

const App = () => {
    return (
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/settings">
                <Settings/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
};

export default App;