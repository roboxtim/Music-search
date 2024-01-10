import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 44px;

  span {
    margin-right: 12px;
    border-right: 1px solid;
    padding: 0 32px;
    color: white;
    cursor: pointer;
  }

  a:first-child {
    margin-right: 12px;
    border-right: 0;
    border-right: 1px solid;
    padding: 0 32px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }

  a:last-child {
    margin-right: 12px;
    border-right: 1px solid;
    border-right: 0;
    padding: 0 32px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
