import { setYear, setMonth, setDate } from "date-fns";

import { Reminder } from "../../../types/Reminder";
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
  reminders: Reminder[];
}

export default function Calendar({
  locales: { dayNamesShort, monthNamesShort },
  current,
  setCurrent,
  reminders
}: CalendarProps) {
  const onMonthChange = (date: Date, monthNumber: number) => {
    const updatedDate = setMonth(date, monthNumber);
    setCurrent(updatedDate);
  };

  const onYearChange = (date: Date, year: number) => {
    const updatedDate = setYear(date, year);
    setCurrent(updatedDate);
  };

  const onDayChange = (date: Date, day: number) => {
    const updatedDate = setDate(date, day);
    setCurrent(updatedDate);
  };

  return (
    <div className="calendar">
      <Header
        current={current}
        monthNames={monthNamesShort}
        onYearChange={(year) => onYearChange(current, year)}
        onMonthChange={(monthNumber) => onMonthChange(current, monthNumber)}
      />
      <WeekList dayNamesShort={dayNamesShort} />
      <DayCells
        current={current}
        onDayChange={(day) => onDayChange(current, day)}
        reminders={reminders}
      />
    </div>
  );
}
