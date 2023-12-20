import styled from "styled-components";

export const StyledLoginPage = styled.div`
  margin: 0 auto;
  padding: 48px 72px;
  box-shadow: 0 0 10px lightgrey;
  border-radius: 20px;
  width: 80%;
  max-width: 400px;

  h2 {
    margin-bottom: 32px;
    font-size: 28px;
    text-align: center;
    color: #101012;
  }

  input {
    display: block;
    margin-top: 12px;
    margin-bottom: 24px;
    padding: 12px 16px;
    width: 90%;
    border-radius: 8px;
    border: 3px solid #E0EFFE;
    color: #5A5A5D;
  }

  label {
    font-size: 16px;
    color: #5A5A5D;

  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: gray;

    &:hover {
      text-decoration: underline;
    }
  }
`