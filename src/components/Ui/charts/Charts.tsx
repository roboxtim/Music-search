import { useState } from "react";
import { useChartsSongsQuery } from "../../../store/API/chartSongsApi";
import { Heading } from "../../TypoGraphy/Heading";
import { StyledCharts } from "./Charts.style";
import { ChartGenre } from "../chartDropdown/ChartOption";

export const Charts = () => {
  const [timePeriod, setTimePeriod] = useState("day");
  const [chartGenre, setChartGenre] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const { data, isError, isLoading } = useChartsSongsQuery([
    timePeriod,
    chartGenre,
  ]);

  const chartsData = data?.chart_items;
  console.log(chartsData);

  const genreOptions = [
    { label: "All", value: "all" },
    { label: "Rap", value: "rap" },
    { label: "Pop", value: "pop" },
    { label: "R&B", value: "rb" },
    { label: "Rock", value: "rock" },
    { label: "Country", value: "country" },
  ];
  const timeOptions = [
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
    { label: "All Time", value: "all_time" },
  ];

  const handleTimePeriodChange = (newPeriod: string) => {
    setTimePeriod(newPeriod);
  };
  const handleChartGenreChange = (newGenre: string) => {
    setChartGenre(newGenre);
  };

  return (
    <StyledCharts>
      <div className="chartsHeader">
        <Heading headingText="Charts" headingType="h1" />
        <div className="dropdown">
          <div className="chartsOption" onClick={() => setIsOpen(!isOpen)}>
            <div className="firstBlockText">
              <p>SONGS / ALL GENRES / TODAY</p>
            </div>
            <div className="chartsBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
          </div>
          <div className={`chartDropdown ${isOpen ? "active" : ""}`}>
            <div className="typeOption">
              <Heading headingText="Type" headingType="h4" />
              <p>Songs</p>
              <p>Album</p>
              <p>Artist</p>
              <p>Lyrics</p>
              <p></p>
              <p></p>
            </div>
            <ChartGenre
              title="Genre"
              options={genreOptions}
              onSelect={handleChartGenreChange}
            />
            <ChartGenre
              title="Time"
              options={timeOptions}
              onSelect={handleTimePeriodChange}
            />
          </div>
        </div>
      </div>
      <div className="chartsList">
        {isLoading && <p>Loading</p>}
        {isError && <p>Error</p>}
        {chartsData &&
          chartsData.map(
            (
              elem: any, // eslint-disable-line
              i: number
            ) => (
              <div className="chartsElems" key={elem.item.id}>
                <p className="chartNum">{i + 1}</p>
                <img
                  className="chartImg"
                  src={elem.item.song_art_image_url}
                  alt=""
                />
                <p className="chartTitle">{elem.item.title}</p>
                <p className="chartArtist">{elem.item.artist_names}</p>
                <p className="chartView">
                  {elem.item.stats.pageviews > 1000000
                    ? (elem.item.stats.pageviews / 1000000)
                        .toFixed(1)
                        .replace(/\.0+$/, "") + "M"
                    : (elem.item.stats.pageviews / 100000)
                        .toFixed(1)
                        .replace(/\.0+$/, "") + "k"}
                </p>
              </div>
            )
          )}
      </div>
    </StyledCharts>
  );
};
