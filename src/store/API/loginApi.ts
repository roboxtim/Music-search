import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { IUserResponse } from "../../models/user";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getUser: build.query<IUserResponse, any>({ // eslint-disable-line
      query: (id: string) => ({
        url: `/user/details/?id=${id}`,
      }),
    }),
  }),
});

export const { useLazyGetUserQuery } = userApi
