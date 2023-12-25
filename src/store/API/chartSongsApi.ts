import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl, xKey, xHost } from "../../utils/baseUrl";

export const chartSongsApi = createApi({
  reducerPath: "chartSongsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.genius.com/',
    prepareHeaders: (header) => {
      header.set('Authorization', 'Bearer W-3-i9p485xn4sxbdF785RSsCbSqaBKseRjvui_Mal9OPzW8yCySdQ9rxUZDmcr3')
    }
  }),
  endpoints: (build) => ({
    getSongById: build.query({
      query: (id) => `songs/${id}`
    })
  })
});

export const { useGetSongByIdQuery } = chartSongsApi
