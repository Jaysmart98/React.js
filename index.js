import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux'


let stat = 7;
const myReducer =(state= stat, action)=>{
  switch (action.type) {
    case "INCREMENT": 
       return state+1;

     case "DECREMENT":
       return state-1;

       default:
  return state;
  }
}

const myStore = createStore(myReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={myStore}>
     <App/>
     </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals(); 
