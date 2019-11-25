import { getMain, watchMain, mainSagas} from "../Sagas";
import {loadMainSuccess, loadMainError } from "../Actions";
import { getMainApi }  from "../../../Shared/Apollo/Services";
import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';


describe("Get Main Saga", () => {
  it("Creates the getBenefits object", () => {
    const id = { payload:"0087104:103"};
    expect(getMain(id)).toBeDefined();
    expect(getMain(id)).toBeTruthy();
  });

  it("Creates the watchMain object", () => {
    expect(watchMain()).toBeDefined();
    expect(watchMain()).toBeTruthy();
  });

  it("Creates the MainSagas object", () => {
    expect(MainSagas).toBeDefined();
    expect(MainSagas).toBeTruthy();
  });
});


describe('getMain', () => {
  const generator = cloneableGenerator(getMain)({payload: ""});
  expect(generator.next().value).toEqual(call(getMainApi));

   test('getMain success', () => {
     const clone = generator.clone();
     expect(clone.next(stateSuccess).value).toEqual(put(loadMainSuccess(stateSuccess)));
     expect(clone.next().done).toEqual(true);
   });

  test('or getMain error', () => {
      const clone = generator.clone();
      expect(clone.throw("error").value).toEqual(put(loadMainError("error")));
      expect(clone.next().done).toEqual(true);
  });
});

