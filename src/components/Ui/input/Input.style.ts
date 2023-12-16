import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`

interface IStyledInputProps {
  $isError: boolean
}

export const StyledInput = styled.input<IStyledInputProps>`
  color: blue;
`