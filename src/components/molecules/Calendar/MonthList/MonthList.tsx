import MonthButton from "../MonthButton";

import "./styles.scss";

export interface MonthListProps {
  monthNames: string[];
  onMonthClick: () => void;
}

export default function MonthList({
  monthNames,
  onMonthClick
}: MonthListProps) {
  return (
    <div className="month-list-container">
      {monthNames.map((month) => (
        <MonthButton month={month} onMonthClick={() => onMonthClick()} />
      ))}
    </div>
  );
}
