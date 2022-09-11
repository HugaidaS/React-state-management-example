import { clickedButon } from "./actionTypes";

export const counterButtonClicked = (amount: number) => ({
  type: clickedButon,
  payload: { amount },
});
