/* eslint-disable max-len */
import React, { Component , Fragment}from "react";
import { connect } from "react-redux";



class Footer extends Component {
  render(){

    return(
      <Fragment>
         Dummy Footer
      </Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    aemDataMap : state.appReducer.aemDataMap
  };
};

export const mapDispatchToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);