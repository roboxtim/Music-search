import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useContext, useEffect, useState } from "react";
import { Heading } from "../../TypoGraphy/Heading";
import { Input } from "../input/Input";
import { StyledHeader } from "./Header.style";
import { useSearchLyricsQuery } from "../../../store/API/searchApi";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../../../contexts/themeContext";
import { useDebounce } from "../../../hooks/debounce";

export const Header = () => {
  const user = useTypedSelector((state) => state.userSlice.user);
  const [searchValue, setSearchData] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const debounced = useDebounce(searchValue);
  const { data: searchData } = useSearchLyricsQuery(searchValue, {
    refetchOnFocus: true,
  });

  const searchResult = searchData?.sections;
  const searchValueBoolean = Boolean(searchValue)

  useEffect(() => {
    setDropDown(searchValueBoolean);
  }, [searchValueBoolean]);

  const { theme } = useContext(ThemeContext);

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
          {dropDown && (
            <div className={`${theme === themes.dark && "dark"}`}>
              <Heading headingText="Search result" headingType="h3" />
              {searchResult.map((elem: any) => { // eslint-disable-line
                if (elem.type === "top_hit") {
                  return elem.hits.map(
                    (
                      hit: any // eslint-disable-line
                    ) =>
                      hit.index === "song" && (
                        <div className="topResult" key={hit.result.id}>
                          <p className="topResultText">Top result</p>
                          <div className="songInfo">
                            <img
                              src={hit.result.song_art_image_thumbnail_url}
                              alt=""
                            />
                            <div className="songDetails">
                              <p className="songTitle">{hit.result.title}</p>
                              <p className="songArtist">
                                {hit.result.artist_names}
                              </p>
                              <p>
                                {hit.result.stats.pageviews > 1000000
                                  ? (hit.result.stats.pageviews / 1000000)
                                      .toFixed(1)
                                      .replace(/\.0+$/, "") + "M"
                                  : (hit.result.stats.pageviews / 100000)
                                      .toFixed(1)
                                      .replace(/\.0+$/, "") + "k"}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                  );
                } else if (elem.type === "song") {
                  return elem.hits.map(
                    (
                      hit: any // eslint-disable-line
                    ) => <p key={hit.result.id}>{hit.result.title}</p>
                  );
                } else if (elem.type === "lyric") {
                  return elem.hits.map(
                    (
                      hit: any // eslint-disable-line
                    ) => <p key={hit.result.id}>{hit.result.title}</p>
                  );
                } else if (elem.type === "artist") {
                  return elem.hits.map(
                    (
                      hit: any // eslint-disable-line
                    ) => <p key={hit.result.id}>{hit.result.name}</p>
                  );
                } else if (elem.type === "album") {
                  return elem.hits.map(
                    (
                      hit: any // eslint-disable-line
                    ) => <p key={hit.result.id}>{hit.result.name}</p>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
      <Link to="/main">
        <div className="headerLogo">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="256pt"
            height="40pt"
            viewBox="0 0 2560.000000 789.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,789.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path d="M17435 5287 c-66 -22 -101 -44 -139 -88 -73 -86 -71 -60 -71 -854 0 -643 2 -720 18 -820 87 -516 385 -833 857 -910 122 -19 348 -19 470 0 236 39 443 144 586 298 59 64 85 109 71 123 -3 3 -42 -8 -87 -25 -143 -56 -230 -72 -407 -78 -180 -6 -279 4 -417 43 -164 46 -299 127 -412 247 -111 116 -184 253 -233 435 -46 173 -51 253 -51 959 0 472 -3 664 -11 669 -22 13 -134 14 -174 1z" />
              <path d="M19060 5291 c-50 -16 -89 -41 -129 -87 -72 -82 -71 -68 -71 -788 0 -360 -5 -680 -10 -731 -6 -49 -22 -129 -36 -177 -38 -124 -29 -136 81 -98 169 58 268 175 327 385 22 79 22 90 26 778 2 522 0 702 -9 713 -13 15 -134 19 -179 5z" />
              <path d="M7035 5276 c-133 -34 -206 -102 -245 -225 -19 -61 -20 -90 -20 -1105 0 -922 2 -1049 16 -1096 31 -104 100 -181 200 -221 l59 -24 755 0 755 0 53 24 c98 44 168 158 160 258 l-3 38 -685 5 c-456 4 -695 9 -716 17 -86 30 -139 79 -176 158 l-23 50 -3 1054 c-2 751 -6 1058 -13 1068 -14 16 -48 15 -114 -1z" />
              <path d="M10839 5266 c-95 -34 -154 -97 -183 -197 -15 -50 -16 -170 -14 -1150 3 -1094 3 -1094 24 -1140 54 -116 146 -173 279 -173 88 0 144 19 202 68 44 37 84 122 90 195 l6 59 -52 23 c-61 26 -122 91 -139 147 -9 29 -12 316 -12 1100 0 1039 0 1062 -19 1072 -27 14 -138 12 -182 -4z" />
              <path d="M12554 5269 c-69 -20 -127 -71 -164 -143 l-35 -69 -3 -369 -3 -368 178 -295 c120 -199 183 -294 193 -292 13 2 15 97 18 768 l2 767 -22 6 c-33 8 -128 6 -164 -5z" />
              <path d="M15006 5264 c-66 -21 -136 -92 -165 -168 l-21 -58 2 -1111 c3 -1108 3 -1112 24 -1158 26 -56 82 -111 143 -141 59 -29 194 -31 254 -4 97 43 166 147 170 253 l2 55 -52 19 c-59 23 -111 76 -133 136 -12 32 -15 221 -18 1109 l-3 1072 -22 6 c-39 10 -130 5 -181 -10z" />
              <path d="M21425 5187 c-83 -45 -120 -71 -194 -142 -117 -111 -189 -244 -216 -403 -24 -138 -16 -244 30 -375 79 -230 287 -407 585 -502 102 -32 171 -47 388 -85 208 -37 284 -60 348 -103 62 -42 85 -75 91 -131 8 -64 20 -71 96 -57 183 36 295 138 304 279 4 59 2 73 -24 122 -58 111 -179 166 -493 220 -304 54 -451 99 -589 180 -163 96 -260 211 -317 375 -25 72 -28 94 -28 215 -1 123 2 143 28 224 16 49 45 111 63 139 56 83 29 99 -72 44z" />
              <path d="M4155 5115 c-89 -16 -191 -55 -268 -102 -71 -43 -183 -146 -233 -215 -50 -68 -38 -78 58 -50 40 12 109 27 153 32 219 29 489 -56 653 -205 l40 -35 168 2 169 3 3 157 3 157 -53 51 c-177 171 -447 251 -693 205z" />
              <path d="M22155 5107 c-109 -29 -199 -86 -231 -149 -17 -32 -34 -125 -27 -144 2 -7 45 -13 107 -17 173 -10 307 -57 435 -152 36 -26 84 -56 108 -67 61 -27 156 -26 221 2 96 41 182 165 182 262 0 44 -2 47 -33 57 -19 7 -63 32 -98 57 -82 58 -175 106 -264 134 -87 28 -319 37 -400 17z" />
              <path d="M7661 5036 c-8 -9 -11 -62 -9 -167 l3 -154 440 -3 c489 -3 497 -2573 64 61 52 94 126 90 205 l-3 64 -541 3 c-453 2 -543 0 -553 -12z" />
              <path d="M2945 4788 c-205 -227 -318 -529 -318 -853 0 -160 17 -276 63 -416 131 -401 458 -726 857 -852 433 -137 890 -52 1245 232 84 67 98 85 80 103 -9 9 -34 5 -94 -15 -141 -45 -217 -58 -383 -64 -125 -4 -185 -2 -270 12 -390 61 -750 294 -962 624 -58 90 -140 269 -167 366 -74 259 -74 543 0 790 15 50 29 100 31 113 9 40 -23 25 -82 -40z" />
              <path d="M11526 4684 c-3 -9 -6 -205 -6 -437 l0 -422 306 -505 c168 -278 322 -526 341 -552 119 -162 370 -214 569 -118 75 36 126 91 166 176 44 94 41 98 -72 105 -65 4 -110 12 -143 27 -101 45 -121 74 -636 935 -481 803 -506 841 -525 791z" />
              <path d="M4134 4196 c-29 -13 -77 -50 -112 -87 l-62 -64 0 -76 c0 -107 20 -167 80 -232 78 -85 122 -100 308 -105 l152 -4 0 -43 c0 -86 14 -91 138 -47 83 30 168 76 228 125 l34 28 0 104 c0 70 -4 106 -13 113 -7 6 -92 12 -207 14 -174 3 -200 5 -241 24 -95 44 -160 127 -177 225 -7 41 -10 44 -42 47 -21 1 -56 -7 -86 -22z" />
              <path d="M7657 3983 c-4 -3 -7 -75 -7 -159 0 -151 0 -154 23 -159 12 -3 204 -5 427 -3 l405 3 54 30 c91 50 146 147 139 245 l-3 45 -516 3 c-283 1 -519 -1 -522 -5z" />
              <path d="M21152 3443 c-23 -8 -64 -36 -90 -61 -66 -64 -96 -129 -100 -218 -7 -124 43 -199 201 -305 295 -197 647 -284 1006 -250 208 21 386 74 532 161 78 46 191 147 234 210 26 37 27 42 13 57 -14 14 -22 13 -84 -12 -287 -115 -657 -122 -973 -19 -161 53 -356 158 -455 245 -43 37 -86 118 -86 162 0 20 -7 30 -26 37 -37 14 -122 11 -172 -7z" />
            </g>
          </svg>
        </div>
      </Link>
      <div className="userInfo">
        <img className="userImg" src="./public/img/user.png" alt="User img" />
        <h3>{user?.name}</h3>
      </div>
    </StyledHeader>
  );
};
