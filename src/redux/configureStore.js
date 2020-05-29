import {createStore, applyMiddleware, compose} from 'redux';
import reducers from "./reducers";

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools
    return createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware())
    );
}