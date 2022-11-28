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

import Day from "../Day";

export interface DayCellsProps {
  current: Date;
  onDayChange: (day: number) => void;
}

export default function DayCells({ current, onDayChange }: DayCellsProps) {
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

      days.push(
        <Day
          day={formattedDay}
          isSelected={isSameDay(current, day)}
          disabled={!isSameMonth(day, monthStart)}
          onClick={() => onDayChange(formattedDay)}
        />
      );
      day = addDays(day, 1);
    }
    rows.push(<div className="row">{days}</div>);
    days = [];
  }

  return <div className="body">{rows}</div>;
}
