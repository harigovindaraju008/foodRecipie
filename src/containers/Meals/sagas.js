// config
import CONFIG from '../../config/config';
import { toURLString, request } from '../../utils/request';

// redux stuff
import { takeLatest, put, all, call , select} from 'redux-saga/effects';
import {selectMealsValue} from './selectors';
import mealActionTypes from './types';
import * as measlActions from './actions';

export function* getMeals() {
  let requestURL = (CONFIG.API.local.baseUrl + CONFIG.API.searchMeal);
  const searchString = yield select(selectMealsValue('mealSearchString'));

  const options = {
    method: 'GET',
  };

	var params = {
    s: searchString,
	}

	requestURL = requestURL + toURLString(params)
  try {
		const mealList = yield call(request, requestURL, options);
		yield put(measlActions.getMealsSuccess(mealList));
  } catch (err) {
    yield put(measlActions.getMealsFailed(err));
  }
}


export function* getMealWatcher() {
  yield takeLatest(mealActionTypes.GET_MEALS, getMeals);
}


export function* mealSagas() {
  yield all([
    call(getMealWatcher),
  ]);
}
