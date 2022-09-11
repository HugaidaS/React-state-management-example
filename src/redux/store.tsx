import { configureStore } from "@reduxjs/toolkit";

import { numberOfClicksReducer } from "./reducers";

export const store = configureStore({
  reducer: { clicks: numberOfClicksReducer },
});
