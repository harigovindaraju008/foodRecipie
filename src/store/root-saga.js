import { all, call } from 'redux-saga/effects';
import { mealSagas } from '../containers/Meals/sagas';
// intialize sagas
export default function* rootSaga() {
  yield all([call(mealSagas)]);
}
