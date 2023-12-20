import { ErrorMessage, StyledInput } from "./Input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string,
  isError: boolean,
  label?: string
}

export const Input = ({
  placeholder,
  label,
  type,
  errorMessage,
  isError,
  value,
  ...props
}: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        $isError={isError}
        value={value}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
