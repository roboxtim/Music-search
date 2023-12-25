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
      padding:  12px 16px;

      .chartsOption {
        display: flex;
        

        .chartsBtn {
          padding-left: 24px;
        }
      }
    }
  }
`;
