import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: [],
  reducers: {
    setWeather: (state, { payload }) => payload,
  },
});

const { actions, reducer } = weatherSlice;

export default reducer;

export const { setWeather } = actions;
