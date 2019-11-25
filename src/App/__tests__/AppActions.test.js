import {
  loadAEMContent,
  loadAEMContentSuccess,
  loadAEMContentError,
  restoreStoreFromSession
} from "../AppActions";
import * as types from "../ActionTypes";

describe("Unit test for getAEMContent ()", () => {
  // this case is to test the expected object is returned
  it("loadAEMContent", () => {
    const getloadAEMContent= loadAEMContent("");
    expect(getloadAEMContent).toEqual({type:types.GET_AEM_CONTENT, payload: ""});
  });
  // case is to test the success scenario of get AEMContent
  it("loadAEMContentSuccess", () => {
    const payload = { "getAEMContent": [
      {
        "fragmentName": "gbcx-provider",
        "contentArray": [
          {
            "key": "jcr:primaryType",
            "value": "nt:unstructured"
          },
          {
            "key": "address-inputbox-place-holder-key",
            "value": "e.g. 1 Joe Street, Toronto, ON"
          }
        ]
      }
    ]
    };
    const getloadAEMContentSuccess = loadAEMContentSuccess(payload);
    expect(getloadAEMContentSuccess).toEqual({type:types.GET_AEM_CONTENT_SUCCESS, payload: payload});
  });
  // case is to test the invalid scenario of AEMContent
  it("loadAEMContentError", () => {
    const errorMessage = { "getAEMContent": [
      {
        "fragmentName": "gbcx-provider",
        "contentArray": [
          {
            "key": "jcr:primaryType",
            "value": "nt:unstructured"
          },
          {
            "key": "address-inputbox-place-holder-key",
            "value": "e.g. 1 Joe Street, Toronto, ON"
          }
        ]
      }
    ]
    };
    const getloadAEMContentError = loadAEMContentError(errorMessage);
    expect(getloadAEMContentError).toEqual({type:types.GET_AEM_CONTENT_ERROR, payload: errorMessage});
  });
  it("Set Member name ", () => {
    const selectedFamilyMember = restoreStoreFromSession("Canada");
    expect(selectedFamilyMember).toEqual({type:types.RESTORE_FROM_SESSION, payload: "Canada"});
  });
});
  
