import React from "react";
import { shallow, } from "enzyme";
import { LoginWithoutRouter, mapStateToProps  }   from "../index";


let wrapper = null;

const aemDataMap = {"member-Sign-In": "Sign In"};

describe("Login Test ", () => {
  beforeEach(() => {
    wrapper = shallow(
      <LoginWithoutRouter aemDataMap={aemDataMap}/>
    );
  });
  it("Verify the component rendering ", () => {
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
});
