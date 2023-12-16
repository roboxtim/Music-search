import { ErrorMessage, StyledInput } from "./Input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string,
  isError: boolean,
}

export const Input = ({
  placeholder,
  type,
  errorMessage,
  isError,
  ...props
}: InputProps) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        $isError={isError}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
