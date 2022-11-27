import MonthButton from "../MonthButton";

import "./styles.scss";

export interface MonthListProps {
  months: string[];
  onMonthClick: () => void;
}

export default function MonthList({ months, onMonthClick }: MonthListProps) {
  return (
    <div className="month-list-container">
      {months.map((month) => (
        <MonthButton month={month} onMonthClick={() => onMonthClick()} />
      ))}
    </div>
  );
}
