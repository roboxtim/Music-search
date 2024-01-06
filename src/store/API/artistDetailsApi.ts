import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { IGetArtistResponse } from "../../models/artistDetails";
import { IGetArtistLeaderboard } from "../../models/artistLeaderboard";
import { IGetArtistSongsResponse } from "../../models/artistSongs";
import { IGetArtistAlbumResponse } from "../../models/artistAlbums";

export interface IGetArtistSongsPayload {
  artistId: string;
  sort: string;
  per_page: number;
}

export const artistDetailsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getArtistById: build.query<IGetArtistResponse, any>({// eslint-disable-line
      query: (artistId: string) => ({
        url: `/artist/details/?id=${artistId}`,
      }),
    }),
    getArtistLeaderboardById: build.query<IGetArtistLeaderboard, any>({// eslint-disable-line
      query: (artistId: string) => ({
        url: `/artist/leaderboard/?id=${artistId}`,
        params: {
          per_page: 10,
        },
      }),
    }),
    geyArtistSongsById: build.query<IGetArtistSongsResponse, any>({//eslint-disable-line
      query: (artistId: string) => ({
        url: `artist/songs/?id=${artistId}`,
        params: {
          sort: 'popularity',
          per_page: 10
        }
      }),
    }),
    getArtistAlbumsById: build.query<IGetArtistAlbumResponse, any>({//eslint-disable-line
      query: (artistId: string) => ({
        url: `artist/albums/?id=${artistId}`
      })
    })
  }),
});

export const {
  useGetArtistByIdQuery,
  useGetArtistLeaderboardByIdQuery,
  useGeyArtistSongsByIdQuery,
  useGetArtistAlbumsByIdQuery
} = artistDetailsApi;
