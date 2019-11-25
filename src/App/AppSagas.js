/**
 * Root Saga class
 * Root saga function will Initilize all other sagas used inside of application.
 * Exported root saga function and redux store will
 * use this function as Middleware.
*/


import { all } from "redux-saga/effects";
import { fork, takeEvery, put, call } from "redux-saga/effects";
import {
  loadAemContentSuccess,
  loadAemContentError,
} from "./AppActions";
import { GET_AEM_CONTENT } from "../Utilities/ActionTypes";
//import { getAemContentApi } from "./Apollo/Services";


import { loginSagas } from "../Containers/Login/Sagas";
 

/**
 * Get the AEM content from AEM service API.
 * Currently we are mocking the data from mock json
 *
 */
export function* getAemContent(){

  try {
    yield put(loadAemContentSuccess(null));
  } catch (error) {
    yield put(loadAemContentError(null));
  }
}



/**
 * Fires the saga for GET_BENEFITS action
 */
export function* watchGetAEMContent() {
  yield takeEvery(GET_AEM_CONTENT, getAemContent);
}

export const appSagas = [fork(watchGetAEMContent)];


/**
 * Collect all saga classes and export as single middleware in to redux store
*/
export default function* rootSaga() {
  yield all([
    ...appSagas,
    ...loginSagas
  ]);
}
