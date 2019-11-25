import React, { Component } from "react";

import ClaimsHeader from "../../Containers/Shared/ClaimsHeader";
import ClaimsFooter from "../../Containers/Shared/ClaimsFooter";
import { saveItemIntoStorage } from "../../Utilities/Persist";

export class Login extends Component {

  constructor(props){
    super(props);
    this.state = { memberId: "" };
    this.memberIdChanged = this.memberIdChanged.bind(this);
    this.ProcessLogin = this.ProcessLogin.bind(this);
  }

  ProcessLogin(){
    saveItemIntoStorage("memberId", this.state.memberId);
    this.props.memberSelected(this.state.memberId);
  }

  memberIdChanged(e) {
    this.setState({memberId: e.target.value});
  }

  render(){
    return (
      <div className="container" role="main">
        <h1 style={{display: "none"}}>Dummy Login Page</h1>
        <ClaimsHeader />
        <div className="main-container">
          <div className="card-wrapper col-lg-8">
            <div className="card">
              <h5 className="card-header">Login</h5>
              <div className="card-body">
                <h5 className="card-title">This is a temporary page to simulate logging in to the system.</h5>
  
                <div className="form-group">
                  <input type="text" onInput={(e) => { this.memberIdChanged(e); }}
                    onChange={(e) => { this.memberIdChanged(e); }}
                    value={this.state.memberId} className="form-control" id="exampleInputEmail1"  placeholder="Member ID" />
                </div>
                <div className="buttons-Container">
                  <button type="button"  disabled={!this.state.memberId}
                    onClick={this.ProcessLogin} className="btn btn-primary gb-button">Set Member ID</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ClaimsFooter />
      </div>
    );
  }
}



