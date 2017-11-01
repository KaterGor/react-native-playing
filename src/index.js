/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

let initialState = {
    text: "Good evening"
};

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            loggerMiddleware //put middleware here
        )
    );
    return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}