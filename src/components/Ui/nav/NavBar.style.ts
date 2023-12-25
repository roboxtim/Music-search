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
    
  }

  a:last-child span{
    border: 0;
  }
`