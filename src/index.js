/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            logger //put middleware here
        )
    );
    return createStore(reducers, initialState, enhancer);
};

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}