import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheRes: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheRes } = searchSlice.actions;
export default searchSlice.reducer;
