import mealActionTypes from './types';

const INITIAL_STATE = {
  mealsList: [],
  mealSearchString: '',
  loading: false,
  notify: false
};

const mealReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mealActionTypes.MEALS_INPUT_VALUE_CHANGED:
        return {...state,  [action.id]: action.value}

    case mealActionTypes.GET_MEALS:
      return {...state,  loading: true}    

    case mealActionTypes.GET_MEALS_SUCCESS:
      let melasList = (action.payload && action.payload.length > 10) ? action.payload.slice(0,10) : action.payload
      return {
        ...state,
        mealsList: melasList,
        error: null,
        loading: false
      };

    case mealActionTypes.GET_MEALS_FAILED:
      return {
        ...state,
        mealsList: [],
        error: action.payload.message,
        loading: false,
        notify: {type: 'error', message: "Sorry, unable to get meals list"}
      }; 

    default:
      return state;
  }
};

export default mealReducer;
