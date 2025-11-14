import { CheckboxItem } from "./checkbox-item";
import { Separator } from "./ui/separator";

interface MultiCheckboxProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  allLabel?: string;
}

export const MultiCheckbox = ({
  options,
  value,
  onChange,
  allLabel = "All pages",
}: MultiCheckboxProps) => {
  return (
    <>
      <CheckboxItem
        label={allLabel}
        value={value.length === options.length}
        onChange={(checked) => onChange(checked ? options : [])}
      />
      <Separator />
      {options.map((option) => (
        <CheckboxItem
          key={option}
          label={option}
          value={value.includes(option)}
          onChange={(checked) =>
            onChange(
              checked ? [...value, option] : value.filter((v) => v !== option)
            )
          }
        />
      ))}
    </>
  );
};
