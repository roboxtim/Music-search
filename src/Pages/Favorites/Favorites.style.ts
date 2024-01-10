import styled from "styled-components";

export const StyledFavorites = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;

  .listData {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    padding-top: 30px;

    .dataSong,
    .datdAlbum,
    .dataArtist {
      width: 30%;
      margin-bottom: 20px;
      text-align: center;
    }

    .chartsElems {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;

      img {
        width: 100%;
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 10px;
      }

      .chartTitle {
        font-weight: bold;
        margin-bottom: 5px;
      }

      .chartArtist {
        font-style: italic;
        margin-bottom: 5px;
      }

      .chartView {
        font-size: 12px;
      }
    }
  }

  .dark {
    background: black;
    color: white;
    .chartTitle,
    .chartArtist,
    .chartView {
      color: white;
    }
  }
`;
