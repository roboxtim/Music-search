import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse } from "../../models/search";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { ChartsResponse } from "../../models/chart";

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', xKey);
      headers.set('X-RapidAPI-Host', xHost)
    },
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchLyrics: build.query<ServerResponse, string>({
      query: (q: any | undefined) => ({ // eslint-disable-line
        url: `/search`,
        params: {
          q,
        },
      }),
    }),
    chartsSongs: build.query<ChartsResponse, string>({
      query: (timePeriod: string) => ({
        url: 'chart/songs/',
        params: {
          time_period: timePeriod
        }
      })
    })
  }),
})

export const { useSearchLyricsQuery, useChartsSongsQuery } = searchApi