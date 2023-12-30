import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { searchApi } from "./API/searchApi";
import { chartSongsApi } from "./API/chartSongsApi";
import { songdetailsApi } from "./API/songDetailsApi";
import { userApi } from "./API/loginApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [searchApi.reducerPath]: searchApi.reducer,
    [chartSongsApi.reducerPath]: chartSongsApi.reducer,
    [songdetailsApi.reducerPath]: songdetailsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      searchApi.middleware,
      chartSongsApi.middleware,
      songdetailsApi.middleware,
      userApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
