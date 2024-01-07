import styled from "styled-components";

interface IImageUrl {
  imageUrl: string;
}

export const StyledComponentWithBackgroundImage = styled.div<IImageUrl>`
  width: 100%;
  height: 288px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 0 top -200px;
  opacity: 0.9;
  filter: blur(1px);
`;
export const StyledArtistDetails = styled.div`
  .artisImgCover {
    display: flex;
    gap: 100px;
    margin-top: -240px;
    margin-left: 400px;
    position: relative;
    z-index: 1;

    img {
      width: 288px;
      border-radius: 50%;
    }

    .artistActivity {
      display: flex;
      gap: 20px;
      margin-top: 220px;
      p {
        font-weight: 600;
        color: ${(props) => props.theme.colors.white};
      }

      span {
        margin-right: 4px;
        color: ${(props) => props.theme.colors.strowberryColor};
      }
    }
  }

  .container {
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-top: 60px;
    
    .artisContainerInfo {
      width: 400px;

      .artistInfo {

        .artistName {
          display: flex;
          gap: 12px;
          margin-bottom: 8px;
          justify-content: center;

          p {
            align-self: center;
            height: 100%;
            font-weight: 600;
            padding: 2px;
            background-color: ${(props) => props.theme.colors.yellow};
          }
        }

        .artistNickname {
          text-align: center;
          font-weight: 600;
        }

        .artistInst {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;

          p {
            color: ${(props) => props.theme.colors.gray};
          }

          svg {
            margin-right: 4px;
            margin-top: -4px;
            color: ${(props) => props.theme.colors.gray};
          }
        }
      }
    }

    .btnFollow {
      padding: 4px 8px;
      margin: 12px 0 12px 171px;
      border: 0.15rem solid ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.black};
      cursor: pointer;
    }

    .artistDescription {
      background-color: #fff;
      padding: 16px;

      h4 {
        margin-bottom: 16px;
      }

      p {
        line-height: 1.45;
      }

      span {
        font-weight: 600;
        color: ${(props) => props.theme.colors.lightPrime};
        cursor: pointer;
      }
    }

    h5 {
      text-transform: uppercase;
      margin: 16px 16px 8px;
      color: #9a9a9a;
    }

    .artistLeaderboard {
      background-color: #fff;
      padding: 16px;

      .artistLeaderboardList {
        display: flex;
        /* justify-content: space-between; */
        border-bottom: 1.5px solid ${(props) => props.theme.colors.primeColor};
        padding: 8px;
        position: relative;

        p:first-child {
          flex-basis: 40px;
          color: ${(props) => props.theme.colors.primeColor};
          font-weight: 600;
        }

        div {
          display: flex;
          flex-basis: 240px;
          gap: 8px;

          img {
            border-radius: 50%;
          }

          p:last-child {
            color: ${(props) => props.theme.colors.gray};
            font-size: 12px;
            margin-top: 4px;
          }

        }

        .attributionValue {
          flex-basis: 88px;
          position: absolute;
          top: 8px;
          right: 8px;
          color: ${(props) => props.theme.colors.primeColor};
          font-weight: 550;
        }
      }
    }

    .artistArt {
      .artistSongs {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        width: 530px;
        margin: 20px;

        .songs {
          display: flex;
          flex-basis: 255px;
          background-color: #fff;
          gap: 6px;

          img {
            width: 75px;
          }

          .songInfo {
            margin-top: 8px;

          }

        }
      }
    }

    .artistAlbums {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      width: 530px;
      background-color: #fff;
      padding: 16px;
      margin: 20px;

      .artistAlbumsInfo {
        width: 150px;
        img {
          width: 150px;
        }

        p {
          text-align: center;
        }
      }
    }
  }
`;
