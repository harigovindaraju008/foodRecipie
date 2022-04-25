// action types
import mealActionTypes from './types';

// action methods
export const getMeals = () => ({
  type: mealActionTypes.GET_MEALS
});

export const getMealsSuccess = ({meals}) => ({
  type: mealActionTypes.GET_MEALS_SUCCESS,
  payload: meals
});

export const getMealsFailed = error => ({
  type: mealActionTypes.GET_MEALS_FAILED,
  payload: error
});

export const onChangeValue = (evt) => {
  return {
    type: mealActionTypes.MEALS_INPUT_VALUE_CHANGED,
    id: (!evt.target.id) ? evt.target.name : evt.target.id,
    value: evt.target.value,
  };
}
