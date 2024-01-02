import styled from "styled-components";

export const StyledSongDetails = styled.div`
  /* .songInfo {
    display: flex;
    margin-top: 36px;

    .songImg {
      width: 240px;
    }
  } */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 20px;

  .songInfo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .songImg {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
      margin-right: 20px;
    }

    .songName {
      h2 {
        margin-bottom: 5px;
        font-size: 24px;
      }

      h3 {
        margin-bottom: 5px;
        font-size: 20px;
        color: #888;
      }

      h4 {
        margin-bottom: 5px;
        font-size: 18px;
        color: #444;
      }

      p {
        margin: 5px 0;
        font-size: 16px;
        color: #666;
      }
    }
  }

  .songViews {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #888;

    p {
      margin: 5px 0;
      font-size: 16px;
    }
  }

  .lyrics {
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 20px;

    p {
      font-size: 18px;
      line-height: 1.6;
      color: #333;
      margin-bottom: 10px;
    }

    a {
      color: #007bff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
