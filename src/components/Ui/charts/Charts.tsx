import { useState } from "react";
import { useChartsSongsQuery } from "../../../store/API/searchApi";
import { Heading } from "../../TypoGraphy/Heading";
import { StyledCharts } from "./Charts.style";

export const Charts = () => {
  const [timePeriod, setTimePeriod] = useState('day')
  const [chartGenre, setChartGenre] = useState('all')
  const { data, isError, isLoading } = useChartsSongsQuery([timePeriod, chartGenre]);
  const chartsData = data?.chart_items;
  console.log(chartsData);

  const handleTimePeriodChange = (newPeriod: string) => {
    setTimePeriod(newPeriod)
  }
  const handleChartGenreChange = (newGenre: string) => {
    setChartGenre(newGenre)
  }

  return (
    <StyledCharts>
      <div className="chartsHeader">
        <Heading headingText="Charts" headingType="h1" />
        <div className="chartsType">
          <div className="chartsOption">
            <span>SONGS / ALL GENRES / TODAY</span>
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
          <div className="chartDropdown">
            <div className="type">
              <Heading headingText="Type" headingType="h4" />
              <p>Songs</p>
              <p>Album</p>
              <p>Artist</p>
              <p>Lyrics</p>
            </div>
            <div className="genre">
              <Heading headingText="Genre" headingType="h4" />
              <p onClick={() => handleChartGenreChange('all')}>All</p>
              <p onClick={() => handleChartGenreChange('rap')}>Rap</p>
              <p onClick={() => handleChartGenreChange('rop')}>Pop</p>
              <p onClick={() => handleChartGenreChange('rb')}>R&B</p>
              <p onClick={() => handleChartGenreChange('rock')}>Rock</p>
              <p onClick={() => handleChartGenreChange('country')}>Country</p>
            </div>
            <div className="time">
              <Heading headingText="Time" headingType="h4" />
              <p onClick={() => handleTimePeriodChange('day')}>Day</p>
              <p onClick={() => handleTimePeriodChange('week')}>Week</p>
              <p onClick={() => handleTimePeriodChange('month')}>Month</p>
              <p onClick={() => handleTimePeriodChange('all_time')}>All Time</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chartsList">
        {isLoading && <p>Loading</p>}
        {isError && <p>Error</p>}
        {chartsData &&
          chartsData.map(
            (
              elem: any,// eslint-disable-line
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
                    ? (elem.item.stats.pageviews / 1000000).toFixed(
                        1
                      ).replace(/\.0+$/, '') + "M"
                    : (elem.item.stats.pageviews / 100000).toFixed(1).replace(/\.0+$/, '') + "k"}
                </p>
              </div>
            )
          )}
      </div>
    </StyledCharts>
  );
};
