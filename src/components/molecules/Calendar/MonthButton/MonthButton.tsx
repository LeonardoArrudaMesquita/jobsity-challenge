export interface MonthButtonProps {
  month: string;
  onMonthClick: () => void;
  isSelected: boolean;
}

export default function MonthButton({
  month,
  onMonthClick,
  isSelected
}: MonthButtonProps) {
  return (
    <span
      className={`month-name-text${isSelected ? "__selected" : ""}`}
      onClick={() => onMonthClick()}
    >
      {month}
    </span>
  );
}
