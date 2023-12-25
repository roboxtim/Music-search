import styled from "styled-components";
// import { css } from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`

interface IStyledInputProps {
  $isError: boolean
}

export const StyledInput = styled.input<IStyledInputProps>`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  padding: 12px 15px;
  transition: 200ms;

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`