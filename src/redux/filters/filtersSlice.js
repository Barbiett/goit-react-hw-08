import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export const selectFilter = (state) => state.filters.filter;

const filtersReducer = slice.reducer;
export default filtersReducer;
