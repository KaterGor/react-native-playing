import * as types from '../constants/types';

export const locations = (state = 0, action) => {
    switch (action.type) {
        case types.SET_LOCATIONS: //move to constants
          return action.locations;
        default:
          return state
      }
};

export const startStation = (state = 0, action) => {
  switch (action.type) {
      case types.SET_START_STATION: //move to constants
        return action.startStation;
      default:
        return state
    }
};
export const endStation = (state = 0, action) => {
  switch (action.type) {
      case types.SET_END_STATION: //move to constants
        return action.endStation;
      default:
        return state
    }
};
export const transportResults = (state = 0, action) => {
  switch (action.type) {
      case types.SET_TRANSPORT_RESULTS: //move to constants
        return action.transportResults;
      default:
        return state
    }
};