import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetArtistAlbumsByIdQuery,
  useGetArtistByIdQuery,
  useGetArtistLeaderboardByIdQuery,
  useGeyArtistSongsByIdQuery,
} from "../../store/API/artistDetailsApi";

import { Container } from "../../components/Ui/container/Container.style";
import { Header } from "../../components/Ui/Header/Header";
import { NavBar } from "../../components/Ui/nav/NavBar";
import {
  StyledArtistDetails,
  StyledComponentWithBackgroundImage,
} from "./ArtistDetails.style";
import { Heading } from "../../components/TypoGraphy/Heading";
import { ThemeContext, themes } from "../../contexts/themeContext";

export const ArtistDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { artistId } = useParams();
  const [isFull, setIsFull] = useState(false);

  const { data } = useGetArtistByIdQuery(artistId);
  const { data: artistDataLeaderboard } =
    useGetArtistLeaderboardByIdQuery(artistId);
  const { data: artistSong } = useGeyArtistSongsByIdQuery(artistId);
  const { data: artistAlbum } = useGetArtistAlbumsByIdQuery(artistId);

  const artistData = data?.artist;
  const artistDataLeaderboardInfo = artistDataLeaderboard?.leaderboard;
  const artistSongsData = artistSong?.songs;
  const artistAlbumData = artistAlbum?.albums;

  const imageUrl = `${artistData?.header_image_url}`;

  const maxLength = 435;

  const handleText = () => {
    setIsFull(!isFull);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]"!);

    const updatedFavorites =
      isFavorite && favorites !== artistData?.id
        ? favorites.filter((favId: string) => favId !== artistData?.id)
        : [...favorites, artistData];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <Header />
      <NavBar />
      <StyledComponentWithBackgroundImage imageUrl={imageUrl} />
      <StyledArtistDetails>
        <div className={`${theme === themes.dark && "dark"}`}>
          <div className="artisImgCover">
            <img src={artistData?.image_url} alt="" />
            <div className="artistActivity">
              <p>Featured</p>
              <p>Earn IQ</p>
              <p>
                <span>{artistData?.followers_count}</span>
                Followers
              </p>
              <p>All Activity</p>
            </div>
            <div className="btn">
              <button onClick={handleFavorite} type="button">
                Add to favorite
              </button>
            </div>
          </div>

          <div className="container">
            <div className="artisContainerInfo">
              <div className="artistInfo">
                <div className="artistName">
                  <Heading headingText={artistData?.name} headingType="h2" />
                  <p>{artistData?.iq}</p>
                </div>
                <p className="artistNickname">
                  AKA: {artistData?.alternate_names.join(", ")}
                </p>
                <div className="artistInst">
                  <p>@{artistData?.instagram_name} |</p>
                  {artistData?.is_verified ? (
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="14"
                        viewBox="0 0 448 350"
                        fill="lightGreen"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                      Verified Artist
                    </p>
                  ) : (
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="12"
                        viewBox="0 0 384 512"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                      Unverified Artist
                    </p>
                  )}
                </div>
              </div>

              <button className="btnFollow">Follow</button>

              <div className="artistDescription">
                <Heading
                  headingText={`About "${artistData?.name}"`}
                  headingType="h4"
                />
                {isFull ? (
                  <div>
                    <p>
                      {artistData?.description_preview}
                      <span onClick={handleText}> Read less</span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      {artistData?.description_preview.length > maxLength
                        ? `${artistData?.description_preview.substring(
                            0,
                            maxLength
                          )}...`
                        : artistData?.description_preview}
                      <span onClick={handleText}> Read more</span>
                    </p>
                  </div>
                )}
              </div>
              <Heading
                headingText={`top ${artistData?.name} scholars`}
                headingType="h5"
              />
              <div className="artistLeaderboard">
                {artistDataLeaderboardInfo &&
                  artistDataLeaderboardInfo.map(
                    (
                      elem: any, //eslint-disable-line
                      i: number
                    ) => (
                      <div className="artistLeaderboardList" key={elem.user.id}>
                        <p>{i + 1}</p>
                        <div>
                          <img src={elem.user.avatar.tiny.url} alt="" />
                          <p>{elem.user.name}</p>
                          <p>{elem.user.iq}</p>
                        </div>
                        <p className="attributionValue">
                          {elem.attribution_value}
                        </p>
                      </div>
                    )
                  )}
              </div>
            </div>

            <div className="artistArt">
              <Heading
                headingText={`popular ${artistData?.name} songs`}
                headingType="h5"
                className="artsitArtHeading"
              />
              <div className="artistSongs">
                {artistSongsData &&
                  artistSongsData.map(
                    (
                      elem: any // eslint-disable-line
                    ) => (
                      <div className="songs">
                        <img src={elem.song_art_image_url} alt="" />
                        <div className="songInfo">
                          <Heading headingText={elem.title} headingType="h4" />
                          <p>{elem.primary_artist.name}</p>
                          <p>
                            {elem.stats.pageviews > 1000000
                              ? (elem.stats.pageviews / 1000000)
                                  .toFixed(1)
                                  .replace(/\.0+$/, "") + "M"
                              : (elem.stats.pageviews / 1000)
                                  .toFixed(1)
                                  .replace(/\.0+$/, "") + "k"}
                          </p>
                        </div>
                      </div>
                    )
                  )}
              </div>

              <Heading
                headingText={`popular ${artistData?.name} albums`}
                headingType="h5"
              />
              <div className="artistAlbums">
                {artistAlbumData &&
                  artistAlbumData.map(
                    (
                      elem: any //eslint-disable-line
                    ) => (
                      <div className="artistAlbumsInfo">
                        <img src={elem.cover_art_url} alt="" />
                        <p>{elem.name}</p>
                        <p>{elem.release_date_components.year}</p>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      </StyledArtistDetails>
    </Container>
  );
};
