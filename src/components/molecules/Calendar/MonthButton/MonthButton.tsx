export interface MonthButtonProps {
  month: string;
  onMonthClick: () => void;
}

export default function MonthButton({ month, onMonthClick }: MonthButtonProps) {
  return (
    <span className="month-name-text" onClick={() => onMonthClick()}>
      {month}
    </span>
  );
}
