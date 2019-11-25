import {
  GET_MAIN,
  GET_MAIN_SUCCESS,
  GET_MAIN_ERROR
} from "../../Shared/ActionTypes";

/**
 * This method is used to return the object to the
 * dispatch event
 * it will update the store with MAIN event
 * @returns {Object} The dispatch object
 */
export const loadMain = () => {
  return {
    type: GET_MAIN,
    payload: ""
  };
};

/**
 * This method is used to return the object and it will update
 * the store with MAIN_SUCCESS event
 * @returns {Object} The dispatch object
 */
export const loadMainSuccess = () => {
  return {
    type: GET_MAIN_SUCCESS,
    payload:""
  };
};


export const loadMainError = (errorMessage) => {
  return {
    type: GET_MAIN_ERROR,
    payload: errorMessage
  };
};