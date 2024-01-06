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

    .artistArt {
      .artistSongs {
        display: flex;
        flex-wrap: wrap;
        width: 600px;

        .songs {
          display: flex;
          flex-basis: 300px;

          img {
            width: 75px;
          }
        }
      }
    }

    .artistAlbums {
      display: flex;
      flex-wrap: wrap;
      width: 480px;

      .artistAlbumsInfo {
        width: 160px;
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
