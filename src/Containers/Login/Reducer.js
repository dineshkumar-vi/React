import {
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "Utilities/ActionTypes";



const initialState = {
  user : null,
  error: null
};

/**
  * This method is responsible for handling all the events
  * that is diaptched and state gets update and returns the new
  * state to component
  * @param {Object} previousState
  * @param {Object} action
  * @returns {Object} new state
  */
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {...state, user : action.payload  };
  case LOGIN_ERROR:
    return {...state, error : action.payload  };
  default:
    return state;
  }
};
