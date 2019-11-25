/* eslint-disable indent */
import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WithPersistState } from "./Hoc/WithPersistState";
import Header from "./Containers/Layout/Header";
import Footer from "./Containers/Layout/Footer";
import Navigation from "./Containers/Layout/Navigation";
import indexRoutes from "./Routes";


import { loadAemContent } from "./App/AppActions";


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { lang : "EN" , user : null, isAemContentLoaded : false, clientId: null};
    this.props.loadAemContent(this.state.lang);
  }


  componentDidUpdate(prevProps){
    if(this.props.aemDataMap !== prevProps.aemDataMap){
      this.setState({isAemContentLoaded : true});
    }
  }

  render() {
    const { lang , user, isAemContentLoaded, clientId } = this.state;


   return (
      <Fragment>
      {
        isAemContentLoaded &&
              <div className="wrapper">
                <h1 style={{display: "none"}}>React Sample App</h1>
                <Header user={user} lang={lang} />
                <Navigation  user={user} />

                <div className="main-container" id="mainContainer">
                  <Switch>
                    {
                      indexRoutes.map((routes, key) => {
                        return (
                          <Route exact
                            path={routes.path} key={"route"+key}
                            component={routes.component}/>
                        );
                      })
                    }
                  </Switch>
                </div>
                 <Footer lang={lang} />
              </div>
           }
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


export default withRouter(WithPersistState(connect(mapStateToProps,
  mapDispatchToProps)(App)));
