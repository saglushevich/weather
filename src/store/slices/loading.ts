import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: true,
  reducers: {
    changeLoading: (state, { payload }) => payload,
  },
});

const { actions, reducer } = loadingSlice;

export default reducer;

export const { changeLoading } = actions;
