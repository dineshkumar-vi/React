import {
  LOGIN_SUCCESS,
} from "Utilities/ActionTypes";
  
  
  
const initialState = {
  currentNavigation : "login"
};
  
/**
    * This method is responsible for handling all the events
    * that is diaptched and state gets update and returns the new
    * state to component
    * @param {Object} previousState
    * @param {Object} action
    * @returns {Object} new state
    */
export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {...state, currentNavigation : "dashboard"  };
  default:
    return state;
  }
};
  