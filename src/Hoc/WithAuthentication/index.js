import React, { Component,Fragment } from "react";
import { Login } from "./Login";
import { getItemFromStorage } from "../../Utilities/Persist";



export const  WithAuthentication= (WrappedComponent) => {

  return class  Authentication extends Component {
    constructor(props) {
      super(props);
      this.state = { showAuthentication : false};
    }

    componentDidMount() {
      this.checkMemberIdPresent();
    }

    memberSelected= () => {
      this.setState({showAuthentication : true });
    }


    checkMemberIdPresent= () => {
      let memberId = getItemFromStorage("memberId");
      if(memberId){
        this.setState({ showAuthentication : true});
      } else {
        this.setState({ showAuthentication : false});
      }
    }

    
    render() {
      let { showAuthentication } = this.state;
      let memberId = getItemFromStorage("memberId");
      // Check Member id present or not , If present render wrapped components else render login component.
      return (
        <Fragment>

          { ! showAuthentication || ! memberId ?
            <Login memberSelected = {this.memberSelected}/> : <WrappedComponent {...this.props} {...this.state} /> }

        </Fragment>
      );
  
    }
  };
};
