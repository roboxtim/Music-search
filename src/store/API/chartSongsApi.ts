import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xKey, xHost } from "../../utils/baseUrl";

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
    chartSongs: build.query({
      query: () => '/chart/songs'
    })
  })
});

export const { useChartSongsQuery } = chartSongsApi
