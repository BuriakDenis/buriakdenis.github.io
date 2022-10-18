import { configureStore } from "@reduxjs/toolkit";
import openModalReducer from "../Store/Reducers/OpenModalSlice";

const store = 
  configureStore({
    reducer: {
      modal: openModalReducer,
    },
  });

export default store;
