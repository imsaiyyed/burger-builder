import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore,combineReducers} from 'redux';
import BurgerReducer from './Reducers/BurgerReducer';
import PriceReducer from './Reducers/PriceReducer';

import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

const rootReducer=combineReducers({
    burger:BurgerReducer,
    price:PriceReducer
});

const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
