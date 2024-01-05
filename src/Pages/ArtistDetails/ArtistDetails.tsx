import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetArtistByIdQuery } from "../../store/API/artistDetailsApi";

import { Container } from "../../components/Ui/container/Container.style";
import { Header } from "../../components/Ui/Header/Header";
import { NavBar } from "../../components/Ui/nav/NavBar";
import {
  StyledArtistDetails,
  StyledComponentWithBackgroundImage,
} from "./ArtistDetails.style";
import { Heading } from "../../components/TypoGraphy/Heading";

export const ArtistDetails = () => {
  const [isFull, setIsFull] = useState(false)
  const { artistId } = useParams();
  const { data } = useGetArtistByIdQuery(artistId);

  const artistData = data?.artist;
  console.log(artistData);

  const imageUrl = `${artistData?.header_image_url}`;

  const maxLength = 435;

  const handleText = () => {
    setIsFull(!isFull)
  }

  return (
    <Container>
      <Header />
      <NavBar />
      <StyledArtistDetails>
        <StyledComponentWithBackgroundImage imageUrl={imageUrl} />
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
        </div>

        <div className="artistInfo">
          <div className="artistName">
            <Heading headingText={artistData?.name} />
            <p>{artistData?.iq}</p>
          </div>
          <p>AKA: {artistData?.alternate_names.join(", ")}</p>
          <div className="artistInst">
            <p>@{artistData?.instagram_name}</p>
            {artistData?.is_verified ? (
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
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

        <button>Follow</button>

        <div className="artistDescription">
          <Heading headingText={`About "${artistData?.name}"`} headingType="h4" />
          {isFull ? (
                <div>
                  <p>{artistData?.description_preview}</p>
                  <button onClick={handleText}>Less</button>
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
                  </p>
                  {artistData?.description_preview.length > maxLength && (
                    <button onClick={handleText}>More</button>
                  )}
                </div>
              )}
        </div>
      </StyledArtistDetails>
    </Container>
  );
};
