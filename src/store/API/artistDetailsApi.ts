import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { IGetArtistResponse } from "../../models/artistDetails";

export const artistDetailsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getArtistById: build.query<IGetArtistResponse, any>({ // eslint-disable-line
      query: (artistId: string) => ({
        url: `/artist/details/?id=${artistId}`
      })
    }),
  }),
});

export const { useGetArtistByIdQuery } = artistDetailsApi;