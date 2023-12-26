import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useEffect, useState } from "react";
import { Heading } from "../../TypoGraphy/Heading";
import { Input } from "../input/Input";
import { StyledHeader } from "./Header.style";
import { useSearchLyricsQuery } from "../../../store/API/searchApi";

export const Header = () => {
  const user = useTypedSelector((state) => state.userSlice.user)
  const [searchValue, setSearchData] = useState("");
  const [dropDown, setDropDown] = useState(false)
  const { data: searchData } = useSearchLyricsQuery(searchValue, {
    refetchOnFocus: true,
  });

  const searchResult = searchData?.hits;
  console.log(searchResult);

  useEffect(() => {
    setDropDown(searchResult?.length > 0)
  }, [searchResult])

  return (
    <StyledHeader>
      <div className="headerInput">
        <Input
          placeholder="Search song"
          type="text"
          isError
          value={searchValue}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <div className="searchResult">
          {dropDown && <ul>
          <Heading headingText="Search result" headingType="h3" />
            {searchResult &&
              searchResult.map(
                (
                  elem: any // eslint-disable-line
                ) => (
                  <li key={elem.result.id}>
                    <img
                      className="songImg"
                      src={elem.result.song_art_image_url}
                      alt=""
                    />
                    <div className="songInfo">
                      <p className="songName">{elem.result.title}</p>
                      <p className="songArtist">{elem.result.artist_names}</p>
                    </div>
                  </li>
                )
              )}
          </ul>}
        </div>
      </div>
      <div className="headerLogo">
        <img className="headerImg" src="./public/img/logo.png" alt="" />
      </div>
      <div className="userInfo">
        <img className="userImg" src="./public/img/user.png" alt="" />
        <Heading headingText="Alex" headingType="h3" />
      </div>
    </StyledHeader>
  );
};
