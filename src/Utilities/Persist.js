// Common Util functions
import { StatePersistentType } from "./AppConstants";

/**
 * Save the data into stroage
**/
export const saveItemIntoStorage = (key , value) => {
  try {
    if(key === null || value === null){
      return undefined;
    }

    if(StatePersistentType === "SESSION") {
      sessionStorage.setItem(key , value);
    } else if(StatePersistentType === "LOCAL") {
      localStorage.setItem(key , value);
    }
  } catch(error) {
    //console.error(" Error occured while accessing session storage");
  }
};

/**
 * Get the data from storage
**/
export const getItemFromStorage = (key) => {
  try {
    if(key === null){
      return undefined;
    }

    if(StatePersistentType === "SESSION") {
      return sessionStorage.getItem(key);
    } else if(StatePersistentType === "LOCAL") {
      return localStorage.getItem(key);
    }
  } catch(error) {
    //console.error(" Error occured while accessing session storage")
  }
};

/**
 * Remove the data from storage
**/
export const removeFromStorage = (key) => {
  try {
    if(StatePersistentType === "SESSION") {
      sessionStorage.removeItem(key);
    } else if(StatePersistentType === "LOCAL") {
      return localStorage.removeItem(key);
    }

  } catch(error) {
    //console.error(" Error occured while accessing session storage")
  }
};
