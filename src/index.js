import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import CounterReducer from "./store/reducers/counter";
import ResultReducer from "./store/reducers/result";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: ResultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log("Middle ware dispatch", action);
            const result = next(action);
            console.log("middle warw next state", store.getState());
            return result;
        };
    };
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger,thunk)));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
