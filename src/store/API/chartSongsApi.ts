import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { ChartsResponse } from "../../models/chart";

export const chartSongsApi = createApi({
  reducerPath: 'chartSongsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', xKey);
      headers.set('X-RapidAPI-Host', xHost)
    },
  }),
  endpoints: (build) => ({
    chartsSongs: build.query<ChartsResponse, [string, string]>({
      query: (params: [string, string]) => ({
        url: 'chart/songs/',
        params: {
          time_period: params[0],
          chart_genre: params[1],
        }
      })
    })
  }),
})

export const { useChartsSongsQuery } = chartSongsApi