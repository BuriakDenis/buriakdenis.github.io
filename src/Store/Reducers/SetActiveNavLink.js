import { createSlice } from "@reduxjs/toolkit";

const SetActiveNavLink = createSlice({
  name: "activeNav",
  initialState: {
    navState: false,
  },
  reducers: {
    navStateActive(state) {
      state.navState = !state.navState;
    },
    navStateDeactive(state) {
      state.navState = false;
    },
  },
});

export const { navStateActive, navStateDeactive } = SetActiveNavLink.actions;
export default SetActiveNavLink.reducer;