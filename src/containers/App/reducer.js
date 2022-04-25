// action types
import gobalActionTypes from './types';

// intial data
const INITIAL_STATE = {
  shipmentInformation: null,
  currentMeal: null
};

// global reducers
const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gobalActionTypes.GLOBAL_INPUT_VALUE_CHANGED:
        return {...state,  [action.id]: action.value}

    default:
      return state;
  }
};

export default globalReducer;
