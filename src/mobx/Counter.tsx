import { makeObservable, observable, action } from "mobx";

export class Counter {
  constructor() {
    makeObservable(this, {
      numberOfClicks: observable,
      increment: action,
    });
  }
  numberOfClicks = 0;

  increment = (amount: number) => {
    this.numberOfClicks += amount;
  };
}
