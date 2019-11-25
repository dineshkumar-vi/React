import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps } from "./App";
// import {
//   GET_AEM_CONTENT,
//   GET_THEME_CONTENT
// } from "./App/AppActions";

//Unit tests for the App component

describe("Unit Tests for the App component", ()=>{
  //so Basic shallow rendering tests
  //Testing that component renders as is without crashing
  it("renders without crashing", () => {
    const historyMock = { push: jest.fn(), location:jest.fn() };
    const loadAemContent = jest.fn();
    const loadThemeContent = jest.fn();
    const wrapper = shallow(<App history={historyMock} loadAemContent={loadAemContent} loadThemeContent={loadThemeContent} />);
    wrapper.setState({ isAEMContentLoaded: false });
    const aemDataMap =  {"member-Sign-In": "Sign In"};
    wrapper.setProps({ aemDataMap: aemDataMap });
    expect(wrapper).toBeDefined();
  });

  it("has the correct store values", () => {
    const aemDataMap = {"member-Sign-In": "Sign In"};
    const initialState = {
      appReducer: {
        aemDataMap: aemDataMap
      }
    };
    expect(mapStateToProps(initialState).aemDataMap).toEqual(aemDataMap);
  });

  // it("should dispatch the called event", () => {
  //   const dispatch = jest.fn();
  //   mapDispatchToProps(dispatch).loadAemContent();
  //   expect(dispatch.mock.calls[0][0]).toEqual({ type: GET_AEM_CONTENT, payload : ""});
  // });
  // it("should dispatch the called event", () => {
  //   const dispatch = jest.fn();
  //   mapDispatchToProps(dispatch).loadThemeContent();
  //   expect(dispatch.mock.calls[0][0]).toEqual({ type: GET_THEME_CONTENT, payload : ""});
  // });
});
