import "./styles.scss";

import MonthList from "./MonthList";
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
  const now = new Date();
  const defaultMonth = monthNamesShort[now.getMonth()];
  const defaultDay = dayNamesShort[now.getDay()];

  return (
    <div className="calendar-container">
      <div className="year-container">
        <Year />
      </div>
      <MonthList
        months={monthNamesShort}
        onMonthClick={() => console.log("month clicked")}
      />
    </div>
  );
}
