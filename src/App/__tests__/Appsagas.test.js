import {loadAEMContent, loadAEMContentSuccess, loadAEMContentError } from "./AppActions";
import { getAemContentApi }  from "../Apollo/Services";
import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';


const errorMessage = {"error" : true , name:"getAemContentApi"};

describe('getAemContentApi', () => {
  const generator = cloneableGenerator(loadAEMContent)();
  expect(generator.next().value).toEqual(call(getAemContentApi));

   test('getAemContentApi success', () => {
     const clone = generator.clone();
     expect(clone.next().value).toEqual(put(loadAEMContentSuccess()));
     expect(clone.next().done).toEqual(true);
   });

  test('or getAemContentApi error', () => {
      const clone = generator.clone();
      expect(clone.throw("error").value).toEqual(put(loadAEMContentError("error")));
      expect(clone.next().done).toEqual(true);
  });
});
