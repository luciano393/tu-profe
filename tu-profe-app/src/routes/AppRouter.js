import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { MainScreen  } from "../components/main/MainScreen";
import { Results } from "../components/main/Results";



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route
                        path="/"
                        exact
                        component={ MainScreen }
                    />

                    <Route 
                        path="/results"
                        exact
                        component={Results}
                    />
                    
                </Switch>
            </div>
        </Router>
    )
}