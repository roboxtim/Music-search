import styled from "styled-components";

const getRandomColor = () => {
  const color = () => Math.floor(Math.random() * 256);
  return `rgb(${color()}, ${color()}, ${color()})`;
};

export const StyledComponentWithBackgroundImage = styled.div`
  width: 100%;
  height: 360px;
  background: linear-gradient(to top, ${getRandomColor()}, ${getRandomColor()});
`;

export const StyledSongDetails = styled.div`
  .songInfo {
    display: flex;
    gap: 40px;
    margin-top: -320px;
    margin-left: 200px;
    position: relative;
    z-index: 1;
    color: black;

    img {
      width: 340px;
    }

    .songDetails {
      .songName {
        h2 {
          font-size: 28px;
          margin-bottom: 12px;
        }
    
        h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .songProduction {
          p:last-child {
            margin: 8px 0 20px;
            font-size: 20px;
          }
        }
      }

      .songDescription {
        width: 400px;
        p {
          font-size: 18px;
          line-height: 140%;
        }
      }

      .songViews {
        margin-top: 32px;

        span {
          margin-right: 12px;
        }
      }
    }
    .songInfoBtn {
      margin-left: 100px;
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

  .lyrics {
    margin-top: -60px;
    padding: 120px 0 40px 200px;
    font-size: 20px;
    cursor: none;
    transition: ease-in-out 0.3s;

    a {
      transition: ease-in-out 0.3s;
    }
  }

  #songDescriptionAbout {
    background: linear-gradient(to top, ${getRandomColor()}, ${getRandomColor()});
    color: black;
    padding: 40px 200px;

    h2 {
      font-size: 80px;
      margin-left: 250px;
    }

    p {
      width: 715px;
      font-size: 24px;
      line-height: 1.45;
      text-align: left;
    }
  }

  .container.dark {
    .lyrics {
      background: black;
      transition: ease-in-out 0.3s;
      a {
        color: white;
        transition: ease-in-out 0.3s;
      }
    }
  }
`;
