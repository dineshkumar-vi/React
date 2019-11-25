/**
 * Root Reducer Class .
 * Initilize all the reducers and combine into single reducer
 * export the final root reducer into store
**/

import { combineReducers } from "redux";
import AplClient from "../Utilities/ApolloClient";
import { LOGOUT } from "../Utilities/ActionTypes";
import {
  GET_AEM_CONTENT_SUCCESS,
  GET_AEM_CONTENT_ERROR,
} from "../Utilities/ActionTypes";
import {reduce , merge} from "lodash";
import { handleState } from "../Utilities/Utils";
import { loginReducer } from "../Containers/Login/Reducer";
import { navigationReducer } from "../Containers/Layout/Navigation/Reducer";


const initialState = {
  aemDataMap : null,
  errorMessage : ""
};


/**
 * Function to get map object for given
 * array of object
 *
 * @param {*} content
 */
const reduceMap = (content) => {
  return reduce(content, function(hash, value) {
    const key = value["key"];
    hash[key] = value["value"];
    return hash;
  }, {});
};

/**
 * This method is used to process the AEM content array
 * and return the combined value
 * @param {*} labelData  - processing the AEM labels
 */
export const parseAEMContent = (labelData)=>{
  const commonDataMap = reduceMap(labelData[0].contentArray);
  const appLabelMap = merge({}, commonDataMap);
  return appLabelMap;
};


/**
 * This method is responsible for handling all the events
 * that is diaptched and state gets update and returns the new
 * state to component
 * @param {Object} previousState
 * @param {Object} action
 * @returns {Object} new state
 */
export const appReducer = (previousState, action) => {
  const state = handleState(previousState,initialState);
  switch (action.type) {
  case GET_AEM_CONTENT_SUCCESS : {
    const labelData = action.payload.data.getAEMContent;
    return {...state, aemDataMap :  parseAEMContent(labelData)  };
  }
  case GET_AEM_CONTENT_ERROR : {
    const labelData = action.payload.data.getAEMContent;
    return {
      ...state,  aemDataMap : parseAEMContent(labelData)
    };
  }
  default :
    return state;
  }
};




/**
 * Initilize all the sub level reducers
*/
const combineReducer = combineReducers({
  appReducer,
  loginReducer,
  navigationReducer
});

/**
 * Export the root reducers
*/
export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    AplClient.getClient().resetStore();
  }
  return combineReducer(state, action);
};
