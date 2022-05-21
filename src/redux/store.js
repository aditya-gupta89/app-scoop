import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./DetailSlice";
export  const store=configureStore({
    reducer:
    {detail:detailSlice.reducer}
});
export default store;