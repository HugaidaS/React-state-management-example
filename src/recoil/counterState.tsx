import { atom } from "recoil";

export const counterState = atom({
  key: "CounterState",
  default: [{ timestamp: 0, amount: 0 }],
});
