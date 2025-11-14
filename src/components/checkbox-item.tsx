import { Checkbox } from "./ui/checkbox";

interface CheckboxItemProps {
  label: string;
  value: boolean;
  onChange: (checked: boolean) => void;
}

export const CheckboxItem = ({ label, value, onChange }: CheckboxItemProps) => {
  return (
    <div className="checkbox-item">
      <span className="checkbox-item-label">{label}</span>
      <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} />
    </div>
  );
};
