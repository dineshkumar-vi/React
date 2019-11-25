import React from "react";
import { shallow, } from "enzyme";

let wrapper = null;


// testcases for Main component
describe("Main", () => {
  // create a component before each test case
  // passing store to the component through provider
  beforeEach(() => {
    wrapper = shallow(
      <MainWithRouter history={historyMock} />
    );
  });
  // this is case for verifying the component is rendering
  it("Renders correctly", () => {
    expect(wrapper).toBeDefined();
  });
