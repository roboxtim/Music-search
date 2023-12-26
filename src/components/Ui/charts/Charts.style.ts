import styled from "styled-components";

export const StyledCharts = styled.div`
  padding: 0 calc(12vw - 35px);
  margin-top: 36px;

  .chartsHeader {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 80px;
    }

    .chartsType {
      align-self: center;
      border: 1px solid;
      padding: 12px 16px;
      width: 360px;

      .chartsOption {
        display: flex;
        padding-bottom: 12px;

        .chartsBtn {
          padding-left: 24px;
        }
      }
    }
  }

  .chartsList {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 32px;

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
  }

  .chartDropdown {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;

    .typeOption{
    flex: 1;
    padding: 20px 0;
  }

  .typeOption p {
    margin: 5px 0;
    cursor: pointer;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  }
`;
