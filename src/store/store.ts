import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { searchApi } from "./API/searchApi";
import { chartSongsApi } from "./API/chartSongsApi";
import { songdetailsApi } from "./API/songDetailsApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [searchApi.reducerPath]: searchApi.reducer,
    [chartSongsApi.reducerPath]: chartSongsApi.reducer,
    [songdetailsApi.reducerPath]: songdetailsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      searchApi.middleware,
      chartSongsApi.middleware,
      songdetailsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
