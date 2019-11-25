/* eslint-disable max-len */
import React, { Component , Fragment}from "react";
import { connect } from "react-redux";
import { AEMConstClass } from "./../../App/AEMConstants";
import { checkLogin } from "./Actions";

import {
  LoginWrapper,
  LoginHeader,
  LoginBody,
  InputGroup,
  Label,
  InputBox,
  InfoText,
  ButtonContainer,
  ButtonNew
} from "./login-parts";


class Login extends Component {

  
  constructor(props){
    super(props);
  }

  checkLogin= (e) => {
    this.props.checkLogin("test" , "test@1234");
  };

  render(){
    const { aemDataMap  }  = this.props;
    return(
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <LoginWrapper>

                <LoginHeader>
                  <h2>{aemDataMap[AEMConstClass.MEMBER_LOGIN]}</h2>
                </LoginHeader>

                <LoginBody>

                  <InputGroup>
                    <Label>{aemDataMap[AEMConstClass.MEMBER_USERNAME]}</Label>
                    <InputBox placeholder={aemDataMap[AEMConstClass.MEMBER_EMAIL]} />
                  </InputGroup>

                  <InputGroup>
                    <Label>{aemDataMap[AEMConstClass. MEMBER_PASSWORD]}</Label>
                    <InputBox type="password" placeholder={aemDataMap[AEMConstClass.MEMBER_PASSWORD]}/>
                  </InputGroup>

                  <InfoText>
                    {aemDataMap[AEMConstClass. MEMBER_TERMS]} <a href="javascript:void(0);">{aemDataMap[AEMConstClass. MEMBER_TERMS_CONDITIONS]}</a>
                  </InfoText>

                  <ButtonContainer>
                    <ButtonNew onClick={(e)=> this.checkLogin(e)}>{aemDataMap[AEMConstClass. MEMBER_SIGN_IN]}</ButtonNew>
                  </ButtonContainer>

                </LoginBody>
              </LoginWrapper>

            </div>
          </div>
        </div>
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
    checkLogin:(userName, password) => dispatch(checkLogin(userName, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
export const LoginWithoutRouter = Login;
