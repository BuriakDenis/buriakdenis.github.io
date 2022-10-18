import { createSlice } from "@reduxjs/toolkit";

const openModalSlice = createSlice({
  name: "openmodal",
  initialState: {
    modalState: false,
  },
  reducers: {
    modalOpen(state) {
      state.modalState = true;
    },
    modalClose(state) {
      state.modalState = false;
    },
  },
});

export const { modalOpen, modalClose } = openModalSlice.actions;
export default openModalSlice.reducer;
