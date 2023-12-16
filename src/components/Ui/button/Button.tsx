// import { Link } from "react-router-dom"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string
}

export const Button = ({
  buttonText,
  type,
  disabled
}: ButtonProps) => {
  return (
    <button type={type} disabled={disabled}>
      {buttonText}
    </button>
  )
}