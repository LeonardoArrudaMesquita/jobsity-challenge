import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek
} from "date-fns";

import { Reminder } from "../../../../types/Reminder";
import Day from "../Day";

export interface DayCellsProps {
  current: Date;
  onDayChange: (day: number) => void;
  reminders: Reminder[];
}

export default function DayCells({
  current,
  onDayChange,
  reminders
}: DayCellsProps) {
  const monthStart = startOfMonth(current);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDay = Number(format(day, dateFormat));
      const remindersOfDay = reminders.filter(
        (reminder) =>
          format(reminder.date, "dd-MM-yyyy") === format(day, "dd-MM-yyyy")
      );

      days.push(
        <Day
          day={formattedDay}
          isSelected={isSameDay(current, day)}
          disabled={!isSameMonth(day, monthStart)}
          onClick={() => onDayChange(formattedDay)}
          reminders={remindersOfDay}
        />
      );
      day = addDays(day, 1);
    }
    rows.push(<div className="row">{days}</div>);
    days = [];
  }

  return <div className="body">{rows}</div>;
}
