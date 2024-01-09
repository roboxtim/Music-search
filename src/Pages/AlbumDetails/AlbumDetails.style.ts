import styled from "styled-components";

interface IImageUrl {
  imageUrl: string;
}

export const StyledComponentWithBackgroundImage = styled.div<IImageUrl>`
  width: 100%;
  height: 360px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 0 top -360px;
  opacity: 0.9;
  filter: blur(2px);

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); 
  }
`;

export const StyledAlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  .albumInfo {
    display: flex;
    gap: 40px;
    margin: -300px 0 0 300px;
    position: relative;
    z-index: 1;

    .albumImg {
      width: 280px;
    }

    .albumDescription {
      width: 400px;
      margin-top: 20px;
      color: white;

      p:first-child {
        font-size: 16px;
        color: ${(props) => props.theme.colors.yellow};
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
        color: gray;
      }
    }

    .chartViewContainer {
      margin-left: 200px;

      .chartViewIcon {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
      .chartView {
        font-size: 16px;
        color: gray;
      }
    }

    .albumInfoBtn {
      button {
        padding: 12px;
        border-radius: 8px;
        cursor: pointer;
      }
      button:hover {
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        transition: .9s ease;
      }
    }
  }

  .albumList {
    display: flex;
    gap: 40px;
    padding: 40px 365px;
    .albumTracks {
      h3 {
        text-transform: uppercase;
        color: gray;
      }
      .albumTracksInfo {
        display: flex;
        justify-content: space-between;
        gap: 160px;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};

        p {
          font-weight: 600;
          width: 200px;
          padding: 16px;


          span {
            color: gray;
            text-transform: capitalize;
            font-weight: 400;
          }
        }

        .albumTracksViews {
          padding: 16px;
        }
      }
    }

    .albumTracksDiscription {
      background: #fff;
      padding: 24px;
      height: 100%;
    }
  }
`;
