import { createSelector } from 'reselect';

// selectors
const selectGlobal = () => state => state.global;

const selectGlobalValue = (id) => createSelector(
  selectGlobal(),
  (globalState) => globalState[id]
);

export {
  selectGlobalValue
}