import { configureStore } from "@reduxjs/toolkit";
// import createreducer from "./todoSlice";
// import countreducer from "./countSlice";
import crudreducer from "./crudSlice/userDetailSlice";
export const store = configureStore({
  reducer: {
    // todox: createreducer,
    // countx: countreducer,
    crudx: crudreducer,
  },
});
