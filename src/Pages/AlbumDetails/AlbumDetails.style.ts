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

export const StyledAlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  

  .albumInfo {
    display: flex;
    gap: 80px;

    .albumInfoCover {
      position: absolute; 
      top: -330px;
      left: 120px;
      overflow: hidden; 
      z-index: -1;

      img {
        width: 100vw;
        /* height: 100%; */
        opacity: 0.7; 
        transition: opacity 0.3s ease; 
      }
    }

    .albumImg {
      width: 280px;
    }

    .albumDescription {
      align-self: center;

      p:first-child {
        font-size: 12px;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      h2 {
        font-size: 36px;
        text-transform: uppercase;
      }
      h3 {
        font-size: 24px;
        margin-bottom: 4px;
      }
      p:last-child {
        font-size: 16px;
      }
    }

    .chartViewContainer {
      display: flex;
      margin-top: 80px;

      .chartViewIcon {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
      .chartView {
        font-size: 12px;
      }
    }
  }

  .albumList {
    display: flex;
    gap: 120px;
    margin-top: 40px;
    .albumTracks {
      .albumTracksInfo {
        display: flex;
        justify-content: space-between;
        gap: 160px;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};

        .albumTracksTitle,
        .albumTracksViews {
          padding: 16px;
        }
      }
    }
  }
`;
