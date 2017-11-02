import Api from '../lib/api';
import * as types from '../constants/types';

export function getLocations(city = 'Frankfurt') {
    return (dispatch, getState) => {
        return Api.get('/journey/99/locations?q=' + city).then(resp => {
            console.log("resp", resp);
            dispatch(setLocations({ locations: resp }));
        }).catch((err) => {
            console.log(err);
        });;
    }
}

export function setLocations({locations}) {
    return {
        type: types.SET_LOCATIONS,
        locations
    }
}
