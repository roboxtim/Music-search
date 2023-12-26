import { Heading } from "../../TypoGraphy/Heading";

interface Option {
  label: string;
  value: string;
}

interface GenreSelectorProps {
  title: string;
  options: Option[];
  onSelect: (value: string) => void;
}

export const ChartGenre = ({
  title,
  options,
  onSelect,
}: GenreSelectorProps) => {
  // const [isChecked, setIsChecked] = useState(false)

  // const handleBtn = (value: string) => {
  //   onSelect(value)
  //   setIsChecked(!isChecked)
  // }
  return (
    <div className="typeOption">
      <Heading headingText={title} headingType="h4" />
      {options.map((option) => (
        <p key={option.value} onClick={() => onSelect(option.value)}>
          {option.label}
        </p>
      ))}
    </div>
  );
};
