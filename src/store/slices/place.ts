import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
  name: "place",
  initialState: {
    city: "",
    country: "",
    coordinates: [],
  },
  reducers: {
    setGeolocation: (state, { payload }) => payload,
  },
});

const { actions, reducer } = placeSlice;

export default reducer;

export const { setGeolocation } = actions;
