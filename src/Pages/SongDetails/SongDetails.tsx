import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSongLyricsQuery,
  useLazyGetSongByIdQuery,
} from "../../store/API/songDetailsApi";
import { Container } from "../../components/Ui/container/Container.style";
import { Header } from "../../components/Ui/Header/Header";
import { NavBar } from "../../components/Ui/nav/NavBar";
import {
  StyledComponentWithBackgroundImage,
  StyledSongDetails,
} from "./SongDetails.style";
import { Heading } from "../../components/TypoGraphy/Heading";
import { SongLyrics } from "../../components/TypoGraphy/SongLyrics";
import { ThemeContext, themes } from "../../contexts/themeContext";

export const SongDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { songId } = useParams();
  const [fetchTriger, { data }] = useLazyGetSongByIdQuery();
  const { data: songLyricsData } = useGetSongLyricsQuery(songId);

  const lyricsData = songLyricsData?.lyrics;
  const dataSong = data?.song;

  useEffect(() => {
    if (songId) {
      fetchTriger(songId);
    }
  }, [songId]);

  const { theme } = useContext(ThemeContext);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]"!);
    
    const updatedFavorites = isFavorite && favorites !== dataSong?.id
      ? favorites.filter((favId: string) => favId !== dataSong?.id)
      : [...favorites, dataSong];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <StyledComponentWithBackgroundImage />
        <StyledSongDetails>
          <div className={`container ${theme === themes.dark && "dark"}`}>
            <div className="songInfo">
              <img
                className="songImg"
                src={dataSong?.custom_song_art_image_url}
                alt="Song image"
              />
              <div className="songDetails">
                <div className="songName">
                  <Heading headingText={dataSong?.title} headingType="h2" />
                  <Heading
                    headingText={dataSong?.artist_names}
                    headingType="h3"
                  />
                  <div className="songProduction">
                    <p>Produced by</p>
                    <p>
                      {dataSong?.producer_artists.length > 0
                        ? dataSong.producer_artists.length === 1
                          ? dataSong.producer_artists[0].name
                          : `${dataSong.producer_artists[0].name} & ${dataSong.producer_artists[1].name}`
                        : "No producer information"}
                    </p>
                  </div>
                </div>
                <div className="songDescription">
                  <p>
                    {dataSong?.description_preview.length > 35 &&
                      dataSong?.description_preview.substring(0, 135)}
                    <a href="#songDescriptionAbout">
                      <span>... Read more</span>
                    </a>
                  </p>
                </div>
                <div className="songViews">
                  <span>
                    {dataSong?.release_date_with_abbreviated_month_for_display}
                  </span>
                  <span>
                    {dataSong?.stats.pageviews > 1000000
                      ? (dataSong?.stats.pageviews / 1000000)
                          .toFixed(1)
                          .replace(/\.0+$/, "") + "M"
                      : (dataSong?.stats.pageviews / 100000)
                          .toFixed(1)
                          .replace(/\.0+$/, "") + "k"}
                  </span>
                </div>
              </div>
              <div className="songInfoBtn">
                <button onClick={handleFavorite} type="button">
                  Add to favorite
                </button>
              </div>
            </div>
            <div className="lyrics">
              <SongLyrics lyricsHTML={lyricsData?.lyrics.body.html} />
            </div>
            <div id="songDescriptionAbout">
              <Heading headingText="About" headingType="h2" />
              <p>{dataSong?.description_preview}</p>
            </div>
          </div>
        </StyledSongDetails>
      </Container>
    </>
  );
};
