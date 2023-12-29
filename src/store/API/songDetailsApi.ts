import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { IGetSongResponse } from "../../models/song";

export const songdetailsApi = createApi({
  reducerPath: "songdetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getSongById: build.query<IGetSongResponse, any>({
      query: (songId: string) => ({
        url: `/song/details/?id=${songId}`,
      }),
    }),
  }),
});

export const { useLazyGetSongByIdQuery } = songdetailsApi
