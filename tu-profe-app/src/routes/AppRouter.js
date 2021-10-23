import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { MainScreen  } from "../components/main/MainScreen";



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route
                        path="/"
                        component={ MainScreen }
                    />
                    
                </Switch>
            </div>
        </Router>
    )
}