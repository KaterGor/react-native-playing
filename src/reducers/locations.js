import * as types from '../constants/types';

export const text = (state = 0, action) => {
    switch (action.type) {
        case types.SET_LOCATIONS: //move to constants
          return action.locations;
        default:
          return state
      }
};