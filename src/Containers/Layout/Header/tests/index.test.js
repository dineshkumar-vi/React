import React from "react";
import { shallow } from "enzyme";
import { Header } from "../index";

let wrapper = null;
let  aemDataMap;
let menuItems;

describe("Footer Test ", () => {
  beforeEach(() => {
    menuItems = [];
    aemDataMap = jest.fn();
    wrapper = shallow(
      <Header  aemDataMap={aemDataMap}
        menuItems={ menuItems } 
      />
    );
  });
  it("Verify the component rendering ", () => {
    expect(wrapper).toBeDefined();
  });
});