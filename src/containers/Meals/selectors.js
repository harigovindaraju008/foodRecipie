import { createSelector } from 'reselect';

const selectMeals = () => state => state.meals;

const selectMealsValue = (id) => createSelector(
  selectMeals(),
  (measlState) => measlState[id]
);

export {
  selectMealsValue
}