import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants';
import { GETCASE } from '../../urlConfig';
import axios from 'axios';
import {
  getAllCase,
  getAllCaseSuccess,
  getAllCaseFailed
} from '../../actions/index';

export function* fetchGetAllCase(action) {

  try {
    const DataCase = yield call(axios, {
      url: GETCASE,
      method: 'GET',
    });
    if (DataCase) {
      console.log(DataCase);
      yield put(getAllCaseSuccess(DataCase.data));

    } else {
      yield put(getAllCaseFailed({}));
    }

  } catch (error) {
    yield put(getAllCaseFailed(error));


  }
}

export default function* getCase() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_ALL_CASE, fetchGetAllCase);

}
