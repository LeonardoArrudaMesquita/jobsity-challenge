import { format, addMonths, setYear, setMonth } from "date-fns";

import DayCells from "./DayCells";
import Header from "./Header";
import WeekList from "./WeekList";

export interface Locales {
  dayNamesShort: string[];
  monthNamesShort: string[];
}

export interface CalendarProps {
  locales: Locales;
  current: Date;
  setCurrent: (date: Date) => void;
}

export default function Calendar({
  locales: { dayNamesShort, monthNamesShort },
  current,
  setCurrent
}: CalendarProps) {
  const onMonthClick = (date: Date, monthNumber: number) => {
    const updatedDate = setMonth(date, monthNumber);
    setCurrent(updatedDate);
  };

  const onYearClick = (date: Date, year: number) => {
    const updatedDate = setYear(date, year);
    setCurrent(updatedDate);
  };

  return (
    <div className="calendar">
      <Header
        current={current}
        monthNames={monthNamesShort}
        dayNames={dayNamesShort}
        onChangeYear={(year) => onYearClick(current, year)}
        onChangeMonth={(monthNumber) => onMonthClick(current, monthNumber)}
      />
      <WeekList dayNamesShort={dayNamesShort} />
      <DayCells current={current} />
    </div>
  );
}
