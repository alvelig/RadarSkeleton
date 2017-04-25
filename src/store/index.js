import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
//import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';
import api from './api';

export default (browserHistory) => {
    const router = routerMiddleware(browserHistory);
    const store = createStore(
        rootReducer,
        /* TODO: initialState */
        composeWithDevTools(
            applyMiddleware(thunk.withExtraArgument(api), router),
        )
        /***
         * TODO: understand how to use redux-devtools-extension:
         * https://medium.com/@zalmoxis/improve-your-development-workflow-with-redux-devtools-extension-f0379227ff83#.egoyenwxf
         **/
    );

    if(module.hot) {
        module.hot.accept('./reducers.js', () => {
            const nextReducer = require('./reducers.js');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}