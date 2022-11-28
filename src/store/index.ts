import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import tempUnitReducer from "./slices/tempUnitSlice";
import weatherReducer from "./slices/weatherSlice";

export const store = configureStore({
  reducer: {
    tempUnit: tempUnitReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
