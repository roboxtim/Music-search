import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 80px;
  background: rgb(255, 255, 100);
  display: flex;
  justify-content: space-between;
  transition: ease-in-out 0.3s;

  .headerInput {
    align-self: center;
    margin-top: 8px;
  }

  .headerInput input {
    padding: 8px 12px;
    width: 200px;
    border: 0;
    transition: ease-in-out 0.3s;
  }

  .headerInput input::placeholder {
    transition: ease-in-out 0.3s;
  }

  .headerImg {
    width: 160px;
  }

  .userInfo {
    display: flex;
    gap: 12px;

    h3 {
      align-self: center;
    }

    .userImg {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      align-self: center;
    }

    .btnCont {
      align-self: center;
      button {
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }

  .searchResult {
    position: absolute;
    top: 57.5px;
    background-color: #f6f6f6;
    width: 360px;
    overflow-y: scroll;

    h3 {
      padding: 12px;
      color: gray;
      font-size: 16px;
      text-transform: uppercase;
    }

    .topResultText {
      color: gray;
      padding: 20px 0 8px 16px;
      text-transform: uppercase;
    }

    .songInfo {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 16px;
      margin-bottom: 20px;

      img {
        width: 75px;
      }

      .songTitle {
      }

      .songArtist {
        grid-column: 2;
      }
    }
  }

  div.dark {
    background: black;
    color: white;

    p {
      color: white;
    }
  }
`;
