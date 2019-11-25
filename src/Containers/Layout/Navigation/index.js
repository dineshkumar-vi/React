import React, { Component, Fragment }from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuItems: [],
      activeItem: null,
      // lang: this.props.lang
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

 
  menuCallback= (menuItems)=> {
    this.setState({
      menuItems
    });
  }


  render(){
    return(
      <Fragment>
        Dummy Left Navigation        
      </Fragment>     
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    aemDataMap : state.appReducer.aemDataMap,
    currentNavigation : state.navigationReducer.currentNavigation
  };
};
  
export const mapDispatchToProps = () => {
  return {
  };
};


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigation));