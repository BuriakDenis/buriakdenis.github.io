import { configureStore } from "@reduxjs/toolkit";
import openModalReducer from "../Store/Reducers/OpenModalSlice";
import SetActiveNavLinkReducer from "../Store/Reducers/SetActiveNavLink";
const store = 
  configureStore({
    reducer: {
      modal: openModalReducer,
      navLink: SetActiveNavLinkReducer
    },
  });

export default store;
