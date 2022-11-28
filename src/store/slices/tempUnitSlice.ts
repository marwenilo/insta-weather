import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

import {TempUnitState, UpdateTempUnitAction } from "types/redux/weatherTypes";
import { TempUnitEnum } from "utils/tempUnitConversion";

const initialState: TempUnitState = {
  tempUnit: TempUnitEnum.CELCIUS,
};

const tempUnitSlice = createSlice({
  name: UpdateTempUnitAction,
  initialState,
  reducers: {
    changeTempUnit: (state,  action: PayloadAction<TempUnitEnum>) => {
      state.tempUnit = action.payload 
    },
  },
});

export const selectTempUnit = (state: RootState) => state.tempUnit;

export const { changeTempUnit } = tempUnitSlice.actions;

export default tempUnitSlice.reducer;
