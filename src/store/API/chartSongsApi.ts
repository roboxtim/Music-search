import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { ChartsResponse } from "../../models/chart";

export const chartSongsApi = createApi({
  reducerPath: "chartSongsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getChartsSongs: build.query<ChartsResponse, [string, string]>({
      query: (params: [string, string]) => ({
        url: "chart/songs/",
        params: {
          time_period: params[0],
          chart_genre: params[1],
        },
      }),
    }),
    getChartsSongsById: build.query<ChartsResponse, string>({
      query: (q: string) => ({
        url: `chart/songs/${q}`,
      }),
    }),
    getChartAlbum: build.query<ChartsResponse, string>({
      query: (timePeriod: string) => ({
        url: "/chart/albums/",
        params: {
          time_period: timePeriod,
        },
      }),
    }),
    getChartArtist: build.query<ChartsResponse, string>({
      query: (timePeriod: string) => ({
        url: "/chart/artists/",
        params: {
          time_period: timePeriod,
        },
      }),
    }),
    getChartLyrics: build.query<ChartsResponse, string>({
      query: (timePeriod: string) => ({
        url: "/chart/referents/",
        params: {
          time_period: timePeriod,
        },
      }),
    }),
  }),
});

export const {
  useGetChartsSongsQuery,
  useLazyGetChartsSongsByIdQuery,
  useGetChartAlbumQuery,
  useGetChartArtistQuery,
  useGetChartLyricsQuery,
} = chartSongsApi;
