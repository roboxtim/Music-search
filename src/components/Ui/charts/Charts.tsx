import { useChartsSongsQuery } from "../../../store/API/searchApi";
import { Heading } from "../../TypoGraphy/Heading";
import { StyledCharts } from "./Charts.style";

export const Charts = () => {
  const { data, isError, isLoading } = useChartsSongsQuery("week"); 
  const chartsData = data?.chart_items;
  console.log(chartsData);

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
        </div>
      </div>
      <div className="chartsList">
        {isLoading && <p>Loading</p>}
        {isError && <p>Error</p>}
        {chartsData &&
          chartsData.map((elem: any, i: number) => ( // eslint-disable-line
            <div key={elem.item.id}>
              <p>{i + 1}</p>
              <p>{elem.item.title}</p>
            </div>
          ))}
      </div>
    </StyledCharts>
  );
};
