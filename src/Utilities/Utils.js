/**
 * Method used to encode the given value and return the base64 format
**/
export const encode = (claimState) => {
  try {
    if(claimState === null){
      return undefined;
    }
    const toString = JSON.stringify(claimState);
    return Buffer.from(toString, "utf8").toString("base64");
  } catch(error) {
    //handle error
  }
};


/**
 * Method used to decode the given value and return in origianl format
**/
export const decode = (claimState) => {
  try {
    if(claimState === null){
      return undefined;
    }
    return Buffer.from(claimState, "base64").toString("utf8");
  } catch(error) {
    //handle error
  }
};



/**
 * Function to handle state in reducer
 *
 * @param {*} previousSate
 * @param {*} initialState
 */
export const handleState = (previousSate,initialState) =>{
  let state = null;
  if(previousSate===null || previousSate===undefined){
    state = initialState;
  }else{
    state = previousSate;
  }
  return state;
};

