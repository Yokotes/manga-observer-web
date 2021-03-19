import { AxiosStatic } from "../../node_modules/axios/index";

export class Observer {
  private observable: string[];

  get getObservable() {
    return this.observable;
  }

  constructor(private readonly httpClient: AxiosStatic) {}

  fillObservable() {
    
  }
}