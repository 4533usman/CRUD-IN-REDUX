import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../feathers/userdetailSlice";

export  const store = configureStore({
  reducer: {
    app: userDetail
  },
});
