import React, { Component,Fragment } from "react";
import { store } from "../../Utilities/Store";
import { encode } from "../../Utilities/Utils";
import {  StatePersistentType} from "../../Utilities/AppConstants";
import { saveItemIntoStorage } from "../../Utilities/Persist";
import { AplClient } from "../../Utilities/ApolloClient";
import gql from "graphql-tag";

export const  WithPersistState= (WrappedComponent) => {

  return class  PersistState extends Component {
    constructor(props) {
      super(props);
      
      // Deduct the router change inside of application .
      // Based on router change , following code will listen and persist the store data. 
      this.props.history.listen((location, action) => {
        this.persistApplicationData(location, action);
      });
    }

    // Store the application data into session / State API based on constant
    // Read the entire store data from redux and convert the data into stream  
    persistApplicationData= (location, application) => {
      const applicationData = encode(store.getState());
      if(StatePersistentType === "SESSION") {
        this.persistStateSession(applicationData);
      } else if(StatePersistentType === "STATEAPI") {
        // Add the appollo graphql call
        this.persistStateAPI(applicationData);
      }  
    };

    // Persist Api data into state.
    persistStateAPI= (data) => {
      AplClient.query({
        mutation: gql`
          ($key: String!, $data: String){ setSavedState(key: $key, data: $data)}
        `
      }).then((response) => console.log(response));
    };

    persistStateSession= (data) => {
      saveItemIntoStorage("applicationStore" , data);
    };
        
    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props}  />
        </Fragment>
      );
    }
  };
};