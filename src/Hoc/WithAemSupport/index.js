import React, { Component,Fragment } from "react";
import { Login } from "./Login";
import { getItemFromStorage } from "../../Utilities/Persist";



export const  WithAemSupport= (WrappedComponent) => {

  return class  AemSupport extends Component {
    constructor(props) {
      super(props);
      this.state = { isAemContentLoaded : false};
      this.props.loadAemContent(this.state.lang);
    }

    
    componentDidUpdate(prevProps){
        if(this.props.aemDataMap !== prevProps.aemDataMap){
          this.setState({isAemContentLoaded : true});
        }
     }
    
    
    render() {
      let { aemDataMap } = this.props;
      let { isAemContentLoaded } = this.props;
      return (
        <Fragment>
            { isAemContentLoaded && <WrappedComponent {...this.props}  /> }
       </Fragment>
      );
  
    }

    export const mapStateToProps = (state) => {
        return {
          customThemeContent : state.appReducer.customThemeContent,
          aemDataMap : state.appReducer.aemDataMap
        };
      };
      
    export const mapDispatchToProps = (dispatch) => {
        return {
          loadThemeContent: () => dispatch(loadThemeContent()),
          loadAemContent:(locale) => dispatch(loadAemContent(locale))
        };
      };
      
      
    export default withRouter(connect(mapStateToProps,
        mapDispatchToProps)(App));
        
  };
};
