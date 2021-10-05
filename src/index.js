import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import './index.css';
import Card from './components/Card';
import App from './containers/App.js'
import CardList from './components/Cardlist.js'
import reportWebVitals from './reportWebVitals';
import Tachyons from 'tachyons';
import thunkMiddleware from 'redux-thunk';
import { robots } from './robots';
import './fonts/Stick_No_Bills/StickNoBills-VariableFont_wght.ttf';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
//import * as serviceWorker from './serviceWorker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const logger = createLogger();
/**async rootReducer */
const rootReducer = combineReducers({ searchRobots, requestRobots })
/**async rootReducer */
//const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  /*<CardList robots={robots} />,
  /* <div >
     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
   </div>,*/
  document.getElementById('root')
);
//registerServiceWorker();
//serviceWorker.register();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
