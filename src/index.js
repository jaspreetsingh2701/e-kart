import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import {
    createStore,
    applyMiddleware
} from 'redux';
import App from './App';
import rootReducer from './app/rootReducer';
import * as serviceWorker from './serviceWorker';
import './app/styles/_root.scss';
import Toasts from './app/reusable-components/toasts/ToastsComponent';

// const middleware = applyMiddleware(thunk, logger);
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(<Provider store={store}>
    <App />
    <Toasts />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
