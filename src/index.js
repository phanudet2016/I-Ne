import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    name: 'beer',
    age: 24
}

const ApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setApi":
                state = {
                    ...state,
                    data: action.payload
                }
            break;
        default:
    }
    return state;
}

// const SaralyReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD":
//                 state = {
//                     result: state.result,
//                     value: state.value
//                 }
//             break;
//         case "SUBTRACT":
                
//             break;
//         default:
//     }
//     return state;
// }

const store = createStore(combineReducers({myApi:ApiReducer}));

store.subscribe(() => {
    console.log("Update Store:", store.getState())
})

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
,document.getElementById('root'));

serviceWorker.unregister();
