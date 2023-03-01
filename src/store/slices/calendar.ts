import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: [],
  reducers: {
    setCalendar: (state, { payload }) => payload,
  },
});

const { actions, reducer } = calendarSlice;

export default reducer;

export const { setCalendar } = actions;
