import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse } from "../../models/search";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";

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
  }),
})

export const { useSearchLyricsQuery } = searchApi