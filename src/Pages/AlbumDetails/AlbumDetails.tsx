import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  useGetAlbumByIdQuery,
  useGetAppearanceByIdQuery,
} from "../../store/API/albumDetailsApi";
import { StyledAlbumDetails } from "./AlbumDetails.style";
import { Header } from "../../components/Ui/Header/Header";
import { NavBar } from "../../components/Ui/nav/NavBar";
import { Container } from "../../components/Ui/container/Container.style";
import { Heading } from "../../components/TypoGraphy/Heading";

export const AlbumDetails = () => {
  const [isFull, setIsFull] = useState(false);
  const { albumId } = useParams();
  const { data: albumData } = useGetAlbumByIdQuery(albumId);
  const { data: appearanceData } = useGetAppearanceByIdQuery(albumId);

  const albumInfoData = albumData?.album;
  const listData = appearanceData?.album_appearances;
  const maxLength = 435;

  const handleText = () => {
    setIsFull(!isFull);
  };

  return (
    <Container>
      <Header />
      <NavBar />
      <StyledAlbumDetails>
        <div className="albumInfo">
          {/* <div className="albumInfoCover">
            <img src={albumInfoData?.custom_header_image_url} alt="" />
          </div> */}
          <img
            className="albumImg"
            src={albumInfoData?.cover_art_url}
            alt=""
          />
          <div className="albumDescription">
            <p>{albumInfoData?._type}</p>
            <Heading headingText={albumInfoData?.name} headingType="h2" />
            <Heading
              headingText={albumInfoData?.artist.name}
              headingType="h3"
            />
            <p>Released {albumInfoData?.release_date_for_display}</p>
          </div>
          <div className="chartViewContainer">
            <svg className="chartViewIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15.45"><path d="M11 2c4 0 7.26 3.85 8.6 5.72-1.34 1.87-4.6 5.73-8.6 5.73S3.74 9.61 2.4 7.73C3.74 5.86 7 2 11 2m0-2C4.45 0 0 7.73 0 7.73s4.45 7.73 11 7.73 11-7.73 11-7.73S17.55 0 11 0z"></path><path d="M11 5a2.73 2.73 0 1 1-2.73 2.73A2.73 2.73 0 0 1 11 5m0-2a4.73 4.73 0 1 0 4.73 4.73A4.73 4.73 0 0 0 11 3z"></path></svg>
            <p className="chartView">
              {albumInfoData?.song_pageviews > 1000000
                ? (albumInfoData?.song_pageviews / 10000)
                    .toFixed(1)
                    .replace(/\.0+$/, "") + "M"
                : (albumInfoData?.song_pageviews / 1000)
                    .toFixed(1)
                    .replace(/\.0+$/, "") + "k"}
            </p>
          </div>
        </div>
        <div className="albumList">
          <div className="albumTracks">
            {listData &&
              listData.map(
                (
                  elem: any //eslint-disable-line
                ) => (
                  <div className="albumTracksInfo" key={elem.song.id}>
                    <div className="albumTracksTitle">{elem.song.title} </div>
                    <div className="albumTracksViews">
                      {elem.song.stats.pageviews > 1000000
                        ? (elem.song.stats.pageviews / 1000000)
                            .toFixed(1)
                            .replace(/\.0+$/, "") + "M"
                        : (elem.song.stats.pageviews / 1000)
                            .toFixed(1)
                            .replace(/\.0+$/, "") + "k"}
                    </div>
                  </div>
                )
              )}
          </div>
          <div className="albumTracksDiscription">
            <Heading
              headingText={`About "${albumInfoData?.name}"`}
              headingType="h5"
            />
            {/* <p>{albumInfoData?.description_preview}</p> */}
            <div>
              {isFull ? (
                <div>
                  <p>{albumInfoData?.description_preview}</p>
                  <button onClick={handleText}>Less</button>
                </div>
              ) : (
                <div>
                  <p>
                    {albumInfoData?.description_preview.length > maxLength
                      ? `${albumInfoData?.description_preview.substring(
                          0,
                          maxLength
                        )}...`
                      : albumInfoData?.description_preview}
                  </p>
                  {albumInfoData?.description_preview.length > maxLength && (
                    <button onClick={handleText}>More</button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </StyledAlbumDetails>
    </Container>
  );
};
