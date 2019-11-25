import React from "react";
import { shallow } from "enzyme";
import { Footer } from "../index";

let wrapper = null;

describe("Footer Test ", () => {
  beforeEach(() => {
    wrapper = shallow(
      <Footer 
      />
    );
  });
  it("Verify the component rendering ", () => {
    expect(wrapper).toBeDefined();
  });
});