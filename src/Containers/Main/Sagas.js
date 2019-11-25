import { GET_MAIN } from "../../Shared/ActionTypes";
import {fork, put, takeEvery, call } from "redux-saga/effects";
import {loadMainSuccess, loadMainError } from "./Actions";
import { getMainApi } from "../../Shared/Apollo/Services";


export function* getMain({payload}) {
  //bff is throwing error if the memberId have spaces
  const memberId = payload.trim();
  try {
    const apiResponse = yield call(getMainApi, memberId);
    yield put(loadMainSuccess(apiResponse));
  } catch(error){
    yield put(loadMainError(error));
  }

}


export function* watchMain() {
  yield takeEvery(GET_MAIN, getMain);
}

export const mainSagas = [ fork(watchMain) ];
