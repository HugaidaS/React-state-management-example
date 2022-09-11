import { AnyAction } from "redux";
import { clickedButon } from "./actionTypes";

export const numberOfClicksReducer = (state = 0, action: AnyAction) => {
  const { type } = action;

  switch (type) {
    case clickedButon:
      return state + action.payload.amount;
    default:
      return state;
  }
};
