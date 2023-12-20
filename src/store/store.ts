import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { searchApi } from "./API/searchApi";
import { chartSongsApi } from "./API/chartSongsApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [searchApi.reducerPath]: searchApi.reducer,
    [chartSongsApi.reducerPath]: chartSongsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      searchApi.middleware,
      chartSongsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
