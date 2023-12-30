import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { IGetSongResponse } from "../../models/song";
import { ILyricsResponse } from "../../models/lyrics";

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
    getSongById: build.query<IGetSongResponse, any>({ // eslint-disable-line
      query: (songId: string) => ({
        url: `/song/details/?id=${songId}`,
      }),
    }),
    getSongLyrics: build.query<ILyricsResponse, any>({ // eslint-disable-line
      query: (lyricsId: string) => ({
        url: `/song/lyrics/?id=${lyricsId}`
      })
    })
  }),
});

export const { useLazyGetSongByIdQuery, useGetSongLyricsQuery } = songdetailsApi
