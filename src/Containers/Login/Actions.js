import {
  CHECK_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../../Utilities/ActionTypes";

/**
 * This method is used to return the object to the
 * dispatch event
 * it will update the store with MAIN event
 * @returns {Object} The dispatch object
 */
export const checkLogin = (userName , password) => {
  return {
    type: CHECK_LOGIN,
    payload: {userName, password}
  };
};

/**
 * This method is used to return the object and it will update
 * the store with LOGIN_SUCCESS event
 * @returns {Object} The dispatch object
 */
export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload:user
  };
};


export const loginError = (errorMessage) => {
  return {
    type: LOGIN_ERROR,
    payload: errorMessage
  };
};