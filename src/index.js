import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './store/reducers/auth'
import postReducer from './store/reducers/post'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReudcer = combineReducers({
  auth: authReducer,
  post: postReducer
  

})

const store = createStore(rootReudcer, composeEnhancers(applyMiddleware(thunk)) )



ReactDOM.render(
<Provider store = {store}>
    <HashRouter>
      <App/>
    </HashRouter>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
