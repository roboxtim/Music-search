import { useEffect, useState } from "react";
import { Header } from "../../components/Ui/Header/Header";
import { NavBar } from "../../components/Ui/nav/NavBar";
import { Container } from "../../components/Ui/container/Container.style";
import { StyledFavorites } from "./Favorites.style";
import { Link } from "react-router-dom";
import { Heading } from "../../components/TypoGraphy/Heading";

export const Favorites = () => {
  const [favSongs, setFavSongs] = useState<string[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavSongs(favorites);
    console.log(favorites);
    
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <StyledFavorites>
          <div className="listData">
            <div className="dataSong">
              <Heading headingText="Favorite songs" />
              {favSongs.map((elem: any) => ( //eslint-disable-line
                <Link to={`/song-details/${elem.id}`}>
                <div className="chartsElems" key={elem.id}>
                  <img
                    className="chartImg"
                    src={elem.song_art_image_url}
                    alt=""
                  />
                  <p className="chartTitle">{elem.title}</p>
                  <p className="chartArtist">{elem.artist_names}</p>
                  <p className="chartView">
                    {elem && elem.stats ? elem.stats.pageviews > 1000000
                      ? (elem.stats.pageviews / 1000000)
                          .toFixed(1)
                          .replace(/\.0+$/, "") + "M"
                      : (elem.stats.pageviews / 100000)
                          .toFixed(1)
                          .replace(/\.0+$/, "") + "k" : ''}
                  </p>
                </div>
              </Link>
              ))}
            </div>

            <div className="datdAlbum">
              <Heading headingText="Favorite songs" />
              {favSongs.map((elem: any) => (//eslint-disable-line
                elem._type === 'album' ? (
                  <Link to={`/album-details/${elem.id}`}>
                    <div className="chartsElems" key={elem.id}>
                      <img
                        className="chartImg"
                        src={elem.cover_art_url}
                        alt=""
                      />
                      <p className="chartTitle">{elem.name}</p>
                      <p className="chartArtist">{elem.artist.name}</p>
                    </div>
                  </Link>
                ) : ''
              ))}
            </div>
          </div>
        </StyledFavorites>
      </Container>
    </>
  );
};
