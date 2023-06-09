import { format } from "date-fns";
import MonthList from "../MonthList";
import WeekList from "../WeekList";
import Year from "../Year";

export interface HeaderProps {
  current: Date;
  monthNames: string[];
  onMonthChange: (monthNumber: number) => void;
  onYearChange: (year: number) => void;
}

export default function Header({
  current,
  monthNames,
  onMonthChange,
  onYearChange
}: HeaderProps) {
  const year = Number(format(current, "yyyy"));
  const currentMonth = Number(format(current, "M")) - 1; // Sub 1 in order to Jan (index 0) to be the starter Month

  return (
    <div className="header">
      <div className="year-container">
        <Year year={year} onChangeYear={(year) => onYearChange(year)} />
      </div>
      <MonthList
        month={currentMonth}
        monthNames={monthNames}
        onChangeMonth={(month) => onMonthChange(month)}
      />
    </div>
  );
}
