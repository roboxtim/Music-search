import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { IGetAppearanceResponse } from "../../models/appearance";
import { IGetAlbumResponse } from "../../models/album";

export const albumDetailsApi = createApi({
  reducerPath: "albumDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getAlbumById: build.query<IGetAlbumResponse, any>({ // eslint-disable-line
      query: (albumId: string) => ({
        url: `/album/details/?id=${albumId}`
      })
    }),
    getAppearanceById: build.query<IGetAppearanceResponse, any>({ // eslint-disable-line
      query: (albumId: string) => ({
        url: `/album/appearances/?id=${albumId}`,
      }),
    }),
  }),
});

export const { useGetAlbumByIdQuery, useGetAppearanceByIdQuery } = albumDetailsApi
