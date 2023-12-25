import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 80px;
  background: rgb(255, 255, 100);
  display: flex;
  justify-content: space-between;

  .headerInput {
    align-self: center;
    margin-top: 8px;
  }

  .headerInput input {
    padding: 8px 12px;
    width: 200px;
    border: 0;
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
  }

  .searchResult {
    position: absolute;
    background-color: white;
    /* border: 1px solid; */
    width: 360px;

    h3 {
      padding: 8px 16px;
      border-bottom: 1px solid;
    }

    li {
      list-style: none;
      border-bottom: 1px solid;
      padding: 16px;
      display: flex;
    }

    .songImg {
      width: 60px;
    }

    .songInfo {
      margin: 4px 12px;

      .songName {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 12px;
      }
    }
  }
`;
