import { combineReducers } from 'redux';
import MealReducer from '../containers/Meals/reducer';
import globalReducer from '../containers/App/reducer';

// intialize reducers 
const rootReducer = combineReducers({
  meals: MealReducer,
  global: globalReducer
});

export default rootReducer;
