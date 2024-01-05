import styled from "styled-components";

interface IImageUrl {
  imageUrl: string
}

export const StyledComponentWithBackgroundImage = styled.div<IImageUrl>`
  width: 100%;
  height: 288px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 0 top -200px;
  opacity: .9;
  filter: blur(1px);
`
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
`;
