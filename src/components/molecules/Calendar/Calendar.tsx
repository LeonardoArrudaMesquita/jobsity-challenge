import "./styles.scss";

import DayCells from "./DayCells";
import Header from "./Header";
import WeekList from "./WeekList";

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
    <div className="calendar">
      <Header
        monthNames={monthNamesShort}
        dayNames={dayNamesShort}
        onMonthClick={() => console.log("month clicked")}
      />
      <WeekList dayNamesShort={dayNamesShort} />
      <DayCells current={new Date()} />
    </div>
  );
}
