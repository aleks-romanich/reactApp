import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers'




const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
//window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(

     <Provider store={store}>
        <App />
     </Provider>,
     document.getElementById('root')
);
registerServiceWorker();
