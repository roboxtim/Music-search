// import { Link } from "react-router-dom"

import { StyledButton } from "./Button.style"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string
}

export const Button = ({
  buttonText,
  type,
  disabled
}: ButtonProps) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {buttonText}
    </StyledButton>
  )
}