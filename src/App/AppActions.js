/**
 * AppActions Class.
 * Action class work as interceptor between components/reduxers/sagas
**/


import { GET_AEM_CONTENT,
  GET_AEM_CONTENT_ERROR,
  GET_AEM_CONTENT_SUCCESS,
} from "../Utilities/ActionTypes";


/**
 * Initial action for call the AEM API .
 * Saga will handle this action
*/
export const loadAemContent= (locale) => {
  return {
    type: GET_AEM_CONTENT,
    payload : locale
  };
};

/**
 * Based on AEM server success response, Handler method will
 * dispatch the GET_AEM_CONTENT_SUCCESS action.
 * @param {Array} An array of all the aem content
 * @returns {Object} The dispatch object
 */
export const loadAemContentSuccess= (aemContent) => {

  return {
    type: GET_AEM_CONTENT_SUCCESS,
    payload : aemContent
  };
};

/**
 * Based on AEM server error response, Handler method will
 * dispatch the GET_AEM_CONTENT_ERROR action.
 * Application will work with default lables .
 *  Default labels available in AEMconstants class.
 * @param {String} The error message to display in case
 * @returns {Object} The dispatch object
 */
export const loadAemContentError= (aemJsonContent) => {

  return {
    type: GET_AEM_CONTENT_ERROR,
    payload : aemJsonContent
  };
};
 
