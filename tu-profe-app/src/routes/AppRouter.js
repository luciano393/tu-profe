import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { MainScreen  } from "../components/main/MainScreen";

import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route 
                        path="/auth"
                        component= { AuthRouter }
                    />

                    <Route
                        path="/"
                        component={ MainScreen }
                    />

                    <Redirect to="/auth/login" />
                    
                </Switch>
            </div>
        </Router>
    )
}