import styled from "styled-components";

export const StyledFavorites = styled.div`
  .chartsElems {
    display: grid;
    grid-template-columns: 52px 0.15fr 1fr 1fr 0.2fr;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .chartsElems > div:first-child {
    font-weight: bold;
    font-size: 16px;
  }

  .chartNum {
    font-size: 20px;
    font-weight: bold;
  }

  .chartImg {
    width: 60px;
  }

  .chartTitle {
    font-size: 24px;
    font-weight: 600;
  }
`;
