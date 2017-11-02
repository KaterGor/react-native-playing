/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import AppContainer from './containers/AppContainer';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';
import { Router} from 'react-native-router-flux';
import AppRoutes from './navigation'

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            logger //put middleware here
        )
    );
    return createStore(reducers, initialState, enhancer);
};

const RouterWithRedux = connect()(Router);

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <RouterWithRedux scenes={AppRoutes} />
        </Provider>
    );
}

export default App;