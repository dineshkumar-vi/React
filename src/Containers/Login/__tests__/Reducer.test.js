import { mainReducer } from "../Reducer";
import * as types from "../../../Shared/ActionTypes";

const initState = {
};


describe("Main Reducer Unit test case", () => {

  //verify the initial state
  it("verify the intial state", () => {
    const init = mainReducer(initState, {});
    expect(init).toEqual(initState);
  });

  // verify the success scenaio
  it("verify the success ", () => {
    const state = mainReducer(initState, { payload: stateSuccess, type: types.GET_MAIN_SUCCESS});
    expect(state).toEqual(processed);
  });

  // verify the failure case
  it("verify the failure ", () => {
    const state = mainReducer(initState, { payload: stateSuccess, type: types.GET_MAIN_ERROR});
    expect(state).toEqual(errorMessage);
  });
});
