import { CHECK_LOGIN } from "../../Utilities/ActionTypes";
import {fork, put, takeEvery, call } from "redux-saga/effects";
import {loginSuccess, loginError } from "./Actions";
import { checkLoginApi } from "./Apollo/Services";


export function* checkLogin({payload}) {
  const userName = payload.userName;
  const password = payload.password;
  try {
    // TODO : Enable once login API avilable.
    //const apiResponse = yield call(checkLoginApi, userName, password);
    let apiResponse = { firstName : "John" , lastName : "Jhon" };
    yield put(loginSuccess(apiResponse));
  } catch(error){
    yield put(loginError(error));
  }

}


export function* watchLogin() {
  yield takeEvery(CHECK_LOGIN, checkLogin);
}

export const loginSagas = [ fork(watchLogin) ];
