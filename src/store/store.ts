import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { searchApi } from "./API/searchApi";
import { chartSongsApi } from "./API/chartSongsApi";
import { songdetailsApi } from "./API/songDetailsApi";
import { userApi } from "./API/loginApi";
import { albumDetailsApi } from "./API/albumDetailsApi";
import { artistDetailsApi } from "./API/artistDetailsApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [searchApi.reducerPath]: searchApi.reducer,
    [chartSongsApi.reducerPath]: chartSongsApi.reducer,
    [songdetailsApi.reducerPath]: songdetailsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [albumDetailsApi.reducerPath]: albumDetailsApi.reducer,
    [artistDetailsApi.reducerPath]: artistDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      searchApi.middleware,
      chartSongsApi.middleware,
      songdetailsApi.middleware,
      userApi.middleware,
      albumDetailsApi.middleware,
      artistDetailsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
