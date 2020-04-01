import { all } from 'redux-saga/effects';
import getCase from './CaseSaga/getAllCase';
import getGlobal from './CaseSaga/GetGlobal';
// import loginPage from './crudsaga/loginUser';

export default function* rootSaga() {
  yield all([
    getCase(),
    getGlobal(),
    // loginPage(),

  ]);
}