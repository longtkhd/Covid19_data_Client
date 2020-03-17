import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants';
import { GETCASE, GETGLOBAL } from '../../urlConfig';
import axios from 'axios';
import {
  getGlobalCase,
  getGlobalCaseSuccess,
  getGlobalCaseFailed
} from '../../actions/index';

export function* fetchGetGlobalCase(action) {

  try {
    const DataCase = yield call(axios, {
      url: GETGLOBAL,
      method: 'GET',
    });
    if (DataCase) {
      // console.log('aa');
      yield put(getGlobalCaseSuccess(DataCase.data));

    } else {
      yield put(getGlobalCaseFailed({}));
    }

  } catch (error) {
    yield put(getGlobalCaseFailed(error));


  }
}



export default function* getGlobal() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_GLOBAL_CASE, fetchGetGlobalCase);

}
