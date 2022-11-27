import MonthList from "../MonthList";
import WeekList from "../WeekList";
import Year from "../Year";

import "./styles.scss";

export interface HeaderProps {
  monthNames: string[];
  dayNames: string[];
  onMonthClick: () => void;
}

export default function Header({
  monthNames,
  dayNames,
  onMonthClick
}: HeaderProps) {
  return (
    <div className="header">
      <div className="year-container">
        <Year />
      </div>
      <MonthList monthNames={monthNames} onMonthClick={() => onMonthClick()} />
    </div>
  );
}
