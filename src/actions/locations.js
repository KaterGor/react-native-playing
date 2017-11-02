import Api from '../lib/api';
import * as types from '../constants/types';

export function getLocations(city = 'Frankfurt') {
    return (dispatch, getState) => {
        return Api.get('/journey/99/locations?q=' + city).then(resp => {
            dispatch(setLocations({ locations: resp }));
        }).catch((err) => {
            console.log(err);
        });
    }
}

export function setLocations({ locations }) {
    return {
        type: types.SET_LOCATIONS,
        locations
    }
}

export function setStartStation(startStation) {
    return {
        type: types.SET_START_STATION,
        startStation: startStation
    }
}
export function getTransportationResults(startStation, endStation) {
    return (dispatch, getState) => {
        dispatch(setEndStation(endStation));
        return Api.get('/journey/99/journey/' + startStation.id + '/' + endStation.id)
            .then(resp => {
                dispatch(setTransportResults({ transportResults: resp }));
            })
            .catch((err) => {
                console.log(err);
            });

    }
}

export function setTransportResults({ transportResults }) {
    console.log(transportResults);
    return {
        type: types.SET_TRANSPORT_RESULTS,
        transportResults
    }
}

export function setEndStation(endStation) {
    return {
        type: types.SET_END_STATION,
        endStation: endStation
    }
}