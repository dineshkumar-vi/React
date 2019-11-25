import AEMContent  from "../../Utilities/Mock/AEMContent.json";
import { appReducer } from "../AppReducer";
import { 
  GET_AEM_CONTENT_SUCCESS,
  GET_AEM_CONTENT_ERROR 
} from "../ActionTypes";
const initState = {
  aemContent : null,
  errorMessage : ""
};

const expected = {"aemContent": {"address-err": "Some required fields are missing or invalid", "address-inputbox-place-holder-key": "e.g. 1 Joe Street, Toronto, ON", "address-street1": "Address street 1", "address-street1-err": "Enter Your Provider's Address 1", "address-street1-placeholder": "e.g. 123 King Street West", "address-street2": "Address street 2 (Optional)", "address-street2-placeholder": "e.g. PO Box 12345, RR 7", "address-subtitle": "Fill out all fields that aren't marked optional. ", "address-textbox-title": "Address", "address-title": "Enter the address details", "benefit-1": "Health", "benefit-2": "Dental", "benefit-3": "Health care spending account", "benefit-4": "Wellness account", "benefits-title": "Which benefit do you want to use?", "business-name": "Business Name (Optional)", "cant-find-provider": "Can't find provider", "city": "City", "city-err": "Enter your provider's city of practice.", "city-placeholder": "e.g. Toronto", "designation": "Designation", "designation-err": "Please select your providers designation", "end-of-results": "End of results", "enter-address-manually-label": "Enter the address manually", "error-no-benefits": "You don't have health benefits", "error-service": "Something went wrong , Please try again", "first-name": "Provider first name", "first-name-err": "Enter your provider's first name", "firstname-err": "Enter your provider's first name", "firstname-placeholder": "Chris", "global-back": "Go back", "global-continue": "Continue", "global-step1": "Benefit", "global-step2": "Provider", "global-step3": "Expenses", "global-step4": "Submit", "jcr:primaryType": "nt:unstructured", "last-name": "Provider last name", "last-name-err": "Enter your provider's last name", "lastname-placeholder": "Brown", "load-more-label": "Load more", "member-title": "Who is this claim for?", "nav-popup-change-family-mem": "Change family member?", "nav-popup-change-provider": "Change provider?", "nav-popup-no": "No", "nav-popup-warning": "You'll lose what you've entered so far.", "nav-popup-yes": "Yes", "phone-number": "Phone number", "phone-number-placeholder": "(___) ___ ____", "phonenumber-textbox-label": "Phone number(optional)", "phonenumber-textbox-placeholder": "e.g. (416)456-7899", "postal-code": "Postal code", "postal-code-err": "e.g. M5V 3W2 (alpha-numeric characters)", "postal-code-placeholder": "e.g. M5C 2F5", "previously-selected-providers": "Previously selected providers", "provider-search-button": "Search", "provider-search-result-error-message": "There are no providers that match the criteria you've entered.\\n Please add provider instead", "provider-search-results-label": "Provider Search Results :", "providertype-placeholder": "e.g. Massage Therapist, Dental & Vision", "providertype-textbox-title": "Provider type", "providertype-title": "Enter the provider or service type.", "providertype-unavailable": "We can`t find the exact provider type you searched for. <a href=\"#\">Submit a claim for {this.state.inputValue} anyway.", "province": "Province", "province-error": "Enter your provider's province", "registration-number": "Registration number", "registration-number-err": "Enter your provider's registration number", "registration-textbox-label": "Registration number(optional)", "registration-textbox-placeholder": "e.g. 12345", "registrationnumber-placeholder": "123456", "search-provider-info": "You can search by registration number, address and phone number.", "search-provider-required-info": "All fields are required, unless marked(Optional).", "search-provider-textbox-title": "Search for a new service provider", "update-provider-details": "Update provider details"}, "errorMessage": ""};

describe("App Reducer Unit test case", () => {

  //verify the initial state
  it("verify the intial state", () => {
    const init = appReducer(initState, {});
    expect(init).toEqual(initState);
  });  

  // verify the success scenaio
  it("verify the success ", () => {
    const state = appReducer(initState, { payload: AEMContent, type: GET_AEM_CONTENT_SUCCESS});
    expect(state).toEqual(expected);
  });

  // verify the failure case
  it("verify the failure ", () => {
    const state = appReducer(initState, { payload: AEMContent, type: GET_AEM_CONTENT_ERROR});
    expect(state).toEqual(expected);
  });
});