import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk )));
    return store;
}
