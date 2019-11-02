import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'; //Redux
import {createStore} from 'redux'; //Store
import './index.css';
import App from './App';
//import Card from './Card';
//import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import {searchRobots} from './reducers';
import 'tachyons';
//import { robots } from './robots';

//create store
const store = createStore(searchRobots);

ReactDOM.render(
<Provider  store={store}><App/></Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
