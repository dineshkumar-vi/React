import {
  GET_MAIN_SUCCESS,
  GET_MAIN_ERROR
} from "Utilities/ActionTypes";



const initialState = {

};

/**
  * This method is responsible for handling all the events
  * that is diaptched and state gets update and returns the new
  * state to component
  * @param {Object} previousState
  * @param {Object} action
  * @returns {Object} new state
  */
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_MAIN_SUCCESS:
    return state;
  case GET_MAIN_ERROR:
    return state;
  default:
    return state;
  }
};
