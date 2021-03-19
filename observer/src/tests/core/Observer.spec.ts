import axios from "../../../node_modules/axios/index";
import { Observer } from "../../core/Observer";

describe('Test Observer class', () => {
  let observerInstance: Observer;

  beforeAll(() => {
    observerInstance = new Observer(axios);
    observerInstance.fillObservable();
  })

  test('Observer instance is defined', () => {
    expect(observerInstance).toBeDefined();
  });

  test('Return observable array', () => {
    expect(observerInstance.getObservable).toReturn();
  })
})