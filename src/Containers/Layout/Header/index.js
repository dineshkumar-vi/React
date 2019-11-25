/* eslint-disable max-len */
import React, { Component , Fragment}from "react";
import { connect } from "react-redux";

import { userMenu } from "./headermenuData.js";
import { loadAemContent } from "../../../App/AppActions";


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {leftMenuItems : [], rightMenuItems: [], lang: "FR"};
    this.handleMenuClickAction = this.handleMenuClickAction.bind();
  }



  handleMenuClickAction= (e, actionData) => {
    //loadAEMContent -- this is a redux load app action. 
    //thakes in language as a variable and 
    //tyoe is GET_AEM_CONTENT

    actionData = actionData === "FR" ? "EN" : "FR";
    if( actionData === "FR" || actionData === "EN") {

      //REDUX ACTION
      this.props.loadAemContent(actionData);
    }
    const { user, aemDataMap } = this.props;
    userMenu(this.menuCallback, user, actionData, aemDataMap);
  };

  componentDidMount() {
    const { user, aemDataMap } = this.props;
    //this is building the menu items bases on the imput in './headermenudata.js'
    //menuCallback is being used to se the recently constructed items to state.

    ///AEM data map is ehat is being return from the reducer
    userMenu(this.menuCallback, user, this.state.lang, aemDataMap );
  }

  componentDidUpdate(prvProps) {
    const { user, aemDataMap } = this.props;
    if(prvProps.aemDataMap !== this.props.aemDataMap){
      userMenu(this.menuCallback, user, this.state.lang, aemDataMap);
    }
  }

  menuCallback= (leftMenuItems, rightMenuItems, lang) => {
    this.setState({leftMenuItems, rightMenuItems, lang});
  }
  
  render(){
   
    return(
      <Fragment>
         Dummy Header
      </Fragment>

    );
  }
}

export const mapStateToProps = (state) => {
  return {
    aemDataMap : state.appReducer.aemDataMap
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadAemContent:(locale) => dispatch(loadAemContent(locale))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

