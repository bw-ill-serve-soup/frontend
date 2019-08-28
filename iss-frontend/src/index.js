import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

