import { Heading } from "../../TypoGraphy/Heading";

interface Option {
  label: string;
  value: string;
  id: string;
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
  return (
    <div className="typeOption">
      <Heading headingText={title} headingType="h4" />
      {options.map((option) => (
        <p key={option.id} onClick={() => onSelect(option.value)}>
          {option.label}
        </p>
      ))}
    </div>
  );
};
