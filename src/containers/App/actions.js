// action types
import gobalActionTypes from './types';

// action methods
export const onChangeGlobalValue = (evt) => {
  return {
    type: gobalActionTypes.GLOBAL_INPUT_VALUE_CHANGED,
    id: (!evt.target.id) ? evt.target.name : evt.target.id,
    value: evt.target.value,
  };
}
