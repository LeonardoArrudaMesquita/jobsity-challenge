import "./styles.scss";

import MonthList from "./MonthList";
import WeekList from "./WeekList";
import Year from "./Year";

export interface Locales {
  daysName?: string[];
  monthNames?: string[];
  dayNamesShort: string[];
  monthNamesShort: string[];
}

export interface CalendarProps {
  locales: Locales;
}

export default function Calendar({
  dayNamesShort,
  daysName,
  monthNames,
  monthNamesShort
}: Locales) {
  return (
    <div className="calendar-container">
      <div className="year-container">
        <Year />
      </div>
      <MonthList
        months={monthNamesShort}
        onMonthClick={() => console.log("month clicked")}
      />
      <WeekList dayNamesShort={dayNamesShort} />
    </div>
  );
}
