export const text = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TEXT': //move to constants
          return action.text;
        default:
          return state
      }
};

//Move switch statement to createReducer
